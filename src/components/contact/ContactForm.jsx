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

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<div dangerouslySetInnerHTML={{ __html: formHtml }} />
				<ThankYouModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</div>
	);
};

export default ContactForm;
