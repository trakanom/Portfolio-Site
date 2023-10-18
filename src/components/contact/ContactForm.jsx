import React, { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import ThankYouModal from '../ThankYouModal';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
        .then(() => {
            setIsModalOpen(true);
            setFormData({ name: '', email: '', message: '' }); // Clear the form
        })
        .catch(error => setError(error.toString()));
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
                    <FormInput
                        inputLabel="Full Name"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Your Name"
                        ariaLabelName="Name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <FormInput
                        inputLabel="Email"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Your email"
                        ariaLabelName="Email"
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            onChange={handleInputChange}
                            value={formData.message}
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                        ></textarea>
                    </div>
                    <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                        <Button
                            title="Send Message"
                            type="submit"
                            aria-label="Send Message"
                        />
                    </div>
                </form>
                <ThankYouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
};

export default ContactForm;
