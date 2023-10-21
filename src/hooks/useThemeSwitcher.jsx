import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme || "dark"); // Default to "dark" if no theme is set in localStorage

	useEffect(() => {
		const root = window.document.documentElement;
		const oppositeTheme = theme === "dark" ? "light" : "dark";

		console.log("Theme toggled to:", theme); // Log the toggled theme
		root.classList.remove(oppositeTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return [theme, setTheme];
};

export default useThemeSwitcher;
