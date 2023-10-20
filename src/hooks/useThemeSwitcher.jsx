import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme);
	const activeTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		console.log(
			"Theme toggled to:",
			activeTheme === "dark" ? "light" : "dark"
		); // Log the toggled theme
		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
