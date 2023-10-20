// src/components/GoogleTagManager.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

function GoogleTagManager() {
	const location = useLocation();

	useEffect(() => {
		TagManager.dataLayer({
			dataLayer: {
				page: location.pathname + location.search,
			},
		});
	}, [location]);

	return null; // This component doesn't render anything
}

export default GoogleTagManager;
