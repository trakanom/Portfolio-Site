import React, { useState } from "react";
import ThankYouModal from "../ThankYouModal";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		additionalContact: "", // Added additional contact field
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [error, setError] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const encode = (data) => {
			const temp_data = Object.keys(data)
				.map(
					(key) =>
						encodeURIComponent(key) +
						"=" +
						encodeURIComponent(data[key])
				)
				.join("&");
			console.log(temp_data);
			return temp_data;
		};

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formData }),
		})
			.then(() => {
				setIsModalOpen(true);
				setFormData({
					name: "",
					email: "",
					message: "",
					additionalContact: "",
				}); // Clear the form
			})
			.catch((error) => setError(error.toString()));
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
					{error && <p className="text-red-500">{error}</p>}
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<div className="mb-4">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="name"
						>
							Full Name
						</label>
						<input
							type="text"
							onChange={handleInputChange}
							value={formData.name}
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-tertiary-light dark:bg-tertiary-dark rounded-md shadow-sm text-md"
							id="name"
							name="name"
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							onChange={handleInputChange}
							value={formData.email}
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-tertiary-light dark:bg-tertiary-dark rounded-md shadow-sm text-md"
							id="email"
							name="email"
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							onChange={handleInputChange}
							value={formData.message}
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-tertiary-light dark:bg-tertiary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>
					<div className="mb-4">
						{" "}
						{/* Additional Contact Field */}
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="additionalContact"
						>
							Additional Contact
						</label>
						<input
							type="text"
							onChange={handleInputChange}
							value={formData.additionalContact}
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-tertiary-light dark:bg-tertiary-dark rounded-md shadow-sm text-md"
							id="additionalContact"
							name="additionalContact"
							placeholder="Additional Contact"
							aria-label="Additional Contact"
						/>
					</div>
					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<button type="submit" aria-label="Send Message">
							Send Message
						</button>
					</div>
				</form>
				<ThankYouModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</div>
	);
};

export default ContactForm;
