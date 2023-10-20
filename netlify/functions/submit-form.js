//.netlify/functions/submit-form.js
const fetch = require("node-fetch");

exports.handler = async function (event, context) {
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: "Method Not Allowed" }),
		};
	}

	const body = new URLSearchParams(event.body);
	const userResponseToken = body.get("g-recaptcha-response");

	const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${userResponseToken}`;

	const verificationResponse = await fetch(verificationURL, {
		method: "POST",
	});

	const verificationResult = await verificationResponse.json();
	if (!userResponseToken) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: "reCAPTCHA verification missing" }),
		};
	}

	if (verificationResult.success) {
		// reCAPTCHA was solved correctly
		// Continue with form processing, e.g., store form data, send email, etc.
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Form submitted successfully" }),
		};
	} else {
		// reCAPTCHA failed
		return {
			statusCode: 400,
			body: JSON.stringify({ message: "reCAPTCHA verification failed" }),
		};
	}
};
