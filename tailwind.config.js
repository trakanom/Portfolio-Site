const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary-light": "#FAE8F4",
				"secondary-light": "#FFFFFF",
				"ternary-light": "#f6f7f8",

				"primary-dark": "#11001C",
				"secondary-dark": "#290025",
				"ternary-dark": "#3D0137",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "5rem",
					xl: "6rem",
					"2xl": "8rem",
				},
			},
		},
	},
	variants: {
		extend: { opacity: ["disabled"] },
	},
	plugins: ["@tailwindcss/forms"],
};
