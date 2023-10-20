import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYouModal from "../ThankYouModal";
import validationSchema from "../../../src/utils/validationSchemas";
import * as yup from "yup";

// ContactForm component for handling user inquiries.
const ContactForm = () => {
	// State for modal visibility
	const [isModalOpen, setIsModalOpen] = useState(false);

	// State to handle form submission loading status
	const [loading, setLoading] = useState(false);

	// State to store form errors
	const [errors, setErrors] = useState({});

	// State to store captcha value
	const [captchaValue, setCaptchaValue] = useState(null);

	// State to store form data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Handle input
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Check if captcha is verified
		if (!captchaValue) {
			setErrors({ captcha: "Please verify you are not a robot." });
			setLoading(false);
			return;
		}

		// Extract form data
		const formData = new FormData(e.target);
		const formValues = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		try {
			// Validate form data against schema
			await validationSchema.validate(formValues, { abortEarly: false });
			setErrors({});

			// Send form data to server
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(formData).toString(),
			})
				.then(() => {
					setIsModalOpen(true);
					e.target.reset();
				})
				.catch((error) => {
					setErrors({
						form:
							"There was a problem with the form submission: " +
							error.message,
					});
				});
		} catch (error) {
			// Handle validation errors
			if (error instanceof yup.ValidationError) {
				const errorMessages = {};
				error.inner.forEach((err) => {
					errorMessages[err.path] = err.message;
				});
				setErrors(errorMessages);
			} else {
				setErrors({
					form:
						"There was a problem with the form submission: " +
						error.message,
				});
			}
		}

		setLoading(false);
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					name="contact"
					method="POST"
					data-netlify-recaptcha="true"
					data-netlify="true"
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<input type="hidden" name="form-name" value="contact" />
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="name"
						>
							Your Name:
							<input
								type="text"
								name="name"
								id="name"
								onChange={handleInputChange}
								value={formData.name}
								className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
								placeholder="Your Name"
								aria-label="Name"
							/>
						</label>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="email"
						>
							Your Email:
							<input
								type="email"
								name="email"
								id="email"
								onChange={handleInputChange}
								value={formData.email}
								className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
								placeholder="Your Email"
								aria-label="Email"
							/>
						</label>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message:
							<textarea
								name="message"
								id="message"
								cols="14"
								rows="6"
								onChange={handleInputChange}
								value={formData.message}
								className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
								aria-label="Message"
							></textarea>
						</label>
					</div>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
						onChange={(value) => setCaptchaValue(value)}
					/>
					{errors.captcha && (
						<div className="text-red-500">{errors.captcha}</div>
					)}
					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<button
							type="submit"
							aria-label="Send Message"
							disabled={loading}
						>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</div>
					<ThankYouModal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
