// hooks/useAnalyticsConsent.js
import { useState, useEffect } from "react";

function useAnalyticsConsent() {
	const [showConsentBanner, setShowConsentBanner] = useState(true);

	useEffect(() => {
		const consentGiven = localStorage.getItem("ga-consent-given");
		if (consentGiven === null) {
			// User hasn't made a choice yet, so we assume consent is given
			window.gtag("consent", "update", {
				ad_storage: "granted",
				analytics_storage: "granted",
			});
			setShowConsentBanner(true);
		} else if (consentGiven === "false") {
			// User has explicitly declined analytics
			window.gtag("consent", "update", {
				ad_storage: "denied",
				analytics_storage: "denied",
			});
		} else {
			// User has previously accepted analytics
			setShowConsentBanner(false);
		}
		console.log("Consent given (useEffect):", consentGiven);
	}, []);

	const handleAccept = () => {
		localStorage.setItem("ga-consent-given", "true");
		setShowConsentBanner(false);
		window.gtag("consent", "update", {
			ad_storage: "granted",
			analytics_storage: "granted",
		});
		console.log("Consent given:", localStorage.getItem("ga-consent-given"));
	};

	const handleDecline = () => {
		localStorage.setItem("ga-consent-given", "false");
		setShowConsentBanner(false);
		window.gtag("consent", "update", {
			ad_storage: "denied",
			analytics_storage: "denied",
		});
		console.log(
			"Consent declined:",
			localStorage.getItem("ga-consent-given")
		);
	};

	return {
		showConsentBanner,
		handleAccept,
		handleDecline,
	};
}

export default useAnalyticsConsent;
