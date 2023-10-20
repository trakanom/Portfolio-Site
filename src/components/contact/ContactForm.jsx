//src/components/contact/ContactForm.jsx
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYouModal from "../ThankYouModal";
import contactFormSchema from "../../../src/utils/validationSchemas";

const ContactForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formHtml, setFormHtml] = useState("");
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const validationSchema = contactFormSchema;
	const [captchaValue, setCaptchaValue] = useState(null);

	useEffect(() => {
		fetch("/contact_form.html")
			.then((response) => response.text())
			.then((data) => {
				setFormHtml(data);
			});
	}, []);

	const handleSubmit = async (e) => {
		// Prevent the default form submission behavior
		e.preventDefault();

		// Set the loading state to true to indicate the form is being processed
		setLoading(true);

		// Check if the reCAPTCHA has been filled out
		if (!captchaValue) {
			// If not, set an error for the captcha and stop the form submission
			setErrors({ captcha: "Please verify you are not a robot." });
			setLoading(false);
			return;
		}

		// Create a FormData object from the form element to easily gather the form data
		const formData = new FormData(e.target);

		// Extract individual form values for validation
		const formValues = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		try {
			// Validate the form values using the validation schema
			await validationSchema.validate(formValues, { abortEarly: false });

			// If validation is successful, clear any previous errors
			setErrors({});

			// Send the form data to the server (in this case, it's being sent to the root path '/')
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(formData).toString(),
			});

			// Check if the server responded with a success status
			if (!response.ok) {
				// If not, throw an error to be caught in the catch block
				throw new Error("Network response was not ok");
			}

			// If the form was submitted successfully, show the thank you modal and reset the form
			setIsModalOpen(true);
			e.target.reset();
		} catch (error) {
			// Check if the error is a validation error
			if (error instanceof yup.ValidationError) {
				// If it is, transform the validation errors into a more usable format
				const errorMessages = {};
				error.inner.forEach((err) => {
					errorMessages[err.path] = err.message;
				});
				// Set the errors to state to be displayed on the form
				setErrors(errorMessages);
			} else {
				// If it's not a validation error, it's a network or other error. Handle it accordingly.
				setErrors({
					form:
						"There was a problem with the form submission: " +
						error.message,
				});
			}
		}

		// Set the loading state back to false to indicate the form processing is done
		setLoading(false);
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					data-netlify="true"
					name="contact"
				>
					<div dangerouslySetInnerHTML={{ __html: formHtml }}></div>
					{/* ... (rest of the form fields) */}
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
