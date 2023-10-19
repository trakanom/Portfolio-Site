// ContactForm.jsx
import React, { useState, useEffect } from "react";
import ThankYouModal from "../ThankYouModal";

const ContactForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formHtml, setFormHtml] = useState("");

	useEffect(() => {
		// Fetch the form when the component mounts
		fetch("/contact_form.html")
			.then((response) => response.text())
			.then((data) => {
				setFormHtml(data);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		// 1. Gather Form Data
		const formData = new FormData(e.target);

		// 2. Validation (basic example for email)
		const email = formData.get("email");
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailRegex.test(email)) {
			alert("Please enter a valid email address.");
			return;
		}

		// 3. Send Data
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then((response) => {
				if (response.ok) {
					// 4. Handle Response
					setIsModalOpen(true); // Show thank you modal
					e.target.reset(); // Reset the form
				} else {
					throw new Error("Network response was not ok");
				}
			})
			.catch((error) => {
				alert(
					"There was a problem with the form submission: " +
						error.message
				);
			});
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<div
					onSubmit={handleSubmit}
					dangerouslySetInnerHTML={{ __html: formHtml }}
				/>
				<ThankYouModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</div>
	);
};

export default ContactForm;
