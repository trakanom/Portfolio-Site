// utils/validationSchemas.js
import { object, string } from "yup";

export const contactFormSchema = object().shape({
	name: string().required("Name is required."),
	email: string()
		.email("Invalid email format.")
		.required("Email is required."),
	message: string()
		.min(10, "Message should be at least 10 characters long.")
		.required("Message is required."),
});

export default contactFormSchema;
