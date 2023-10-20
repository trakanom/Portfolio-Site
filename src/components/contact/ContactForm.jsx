// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYouModal from "../ThankYouModal";
import contactFormSchema from "../../../src/utils/validationSchemas";
import * as yup from "yup";

/**
 * ContactForm Component
 * This component renders a contact form with reCAPTCHA validation and provides feedback to the user upon successful submission.
 */
const ContactForm = () => {
	// State management for modal visibility, form submission loading state, form errors, and reCAPTCHA value

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const [captchaValue, setCaptchaValue] = useState(null);
	const [formHtml, setFormHtml] = useState("");
	// Using a predefined validation schema for form validation
	const validationSchema = contactFormSchema;
	useEffect(() => {
		fetch("/contact_form.html")
			.then((response) => response.text())
			.then((data) => {
				setFormHtml(data);
			});
	}, []);
	/**
	 * Handles the form submission.
	 * Validates the form data, checks reCAPTCHA, and sends a POST request.
	 * @param {Event} e - The form submission event
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Check reCAPTCHA validation
		if (!captchaValue) {
			setErrors({ captcha: "Please verify you are not a robot." });
			setLoading(false);
			return;
		}

		// Extract form data for validation and submission
		const formData = new FormData(e.target);
		const formValues = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		try {
			// Validate form data against the schema
			await validationSchema.validate(formValues, { abortEarly: false });
			setErrors({});

			// Send the form data to the server
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(formData).toString(),
			})
				.then(() => {
					// On successful submission, show a thank you modal and reset the form
					setIsModalOpen(true);
					e.target.reset();
				})
				.catch((error) => {
					// Handle any network or server-side errors
					setErrors({
						form:
							"There was a problem with the form submission: " +
							error.message,
					});
				});
		} catch (error) {
			// Handle form validation errors
			if (error instanceof yup.ValidationError) {
				const errorMessages = {};
				error.inner.forEach((err) => {
					errorMessages[err.path] = err.message;
				});
				setErrors(errorMessages);
			} else {
				// Handle other types of errors
				setErrors({
					form:
						"There was a problem with the form submission: " +
						error.message,
				});
			}
		}

		setLoading(false);
	};

	// Render the contact form with reCAPTCHA and error handling
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					data-netlify="true"
					name="contact"
				>
					<input type="hidden" name="form-name" value="contact" />
					<div dangerouslySetInnerHTML={{ __html: formHtml }}></div>
					{/* ... rest of your form fields ... */}
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
