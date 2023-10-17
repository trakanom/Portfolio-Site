// hooks/useAnalyticsConsent.js
import { useState, useEffect } from 'react';

function useAnalyticsConsent() {
	const [showConsentBanner, setShowConsentBanner] = useState(true);

	useEffect(() => {
		const consentGiven = localStorage.getItem('ga-consent-given');
		console.log("Consent given (useEffect):", consentGiven);
		if (consentGiven === null) {
            // User hasn't made a choice yet, so we assume consent is given
            window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
			setShowConsentBanner(true);
        } else if (consentGiven === 'false') {
            // User has explicitly declined analytics
            window.gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });
        }
	}, []);
	

    const handleAccept = () => {
        localStorage.setItem('ga-consent-given', 'true');
		console.log("Consent given:", localStorage.getItem('ga-consent-given'));
        setShowConsentBanner(false);
        window.gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
    };

    const handleDecline = () => {
        localStorage.setItem('ga-consent-given', 'false');
				console.log("Consent given:", localStorage.getItem('ga-consent-given'));
        setShowConsentBanner(false);
        window.gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
        });
    };

    return {
        showConsentBanner,
        handleAccept,
        handleDecline
    };
}

export default useAnalyticsConsent;
