// const fetch = require("node-fetch");

// exports.handler = async function (event, context) {
// 	if (event.httpMethod !== "POST") {
// 		return { statusCode: 405, body: "Method Not Allowed" };
// 	}

// 	const body = JSON.parse(event.body);
// 	const userResponseToken = body["g-recaptcha-response"];

// 	const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=YOUR_RECAPTCHA_SECRET_KEY&response=${userResponseToken}`;

// 	const verificationResponse = await fetch(verificationURL, {
// 		method: "POST",
// 	});

// 	const verificationResult = await verificationResponse.json();

// 	if (verificationResult.success) {
// 		// reCAPTCHA was solved correctly
// 		// Continue with form processing, e.g., store form data, send email, etc.
// 		return { statusCode: 200, body: "Form submitted successfully" };
// 	} else {
// 		// reCAPTCHA failed
// 		return { statusCode: 400, body: "reCAPTCHA verification failed" };
// 	}
// };
