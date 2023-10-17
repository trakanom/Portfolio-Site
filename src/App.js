import React, { Suspense, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import UseScrollToTop from './hooks/useScrollToTop';
import { SingleProjectProvider } from './context/SingleProjectContext';
import './css/App.css';
import UnderConstructionSplash from './components/UnderConstructionSplash';
import GoogleTagManager from './components/GoogleTagManager';
import ConsentBanner from './components/ConsentBanner';
// Lazy-loaded components
const About = React.lazy(() => import('./pages/AboutMe'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectSingle = React.lazy(() => import('./pages/ProjectSingle'));


function App() {
	const [showSplash, setShowSplash] = useState(true);
    // const [showConsentBanner, setShowConsentBanner] = useState(false);
	const [showConsentBanner, setShowConsentBanner] = useState(true);

	useEffect(() => {
		const consentGiven = localStorage.getItem('ga-consent-given');
		console.log("Consent given (useEffect):", consentGiven);
		if (consentGiven === null) {
			setShowConsentBanner(true);
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
	return (
		<div classname="App">
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<GoogleTagManager />
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route path="projects/:projectId" element={
								<SingleProjectProvider>
									<ProjectSingle />
								</SingleProjectProvider>
							} />
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
			{showConsentBanner && <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />}
			{showSplash && <UnderConstructionSplash onClose={() => setShowSplash(false)} />}
		</AnimatePresence>
		</div>
	);
}

export default App;
