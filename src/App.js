import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import UseScrollToTop from './hooks/useScrollToTop';
import { SingleProjectProvider } from './context/SingleProjectContext';
import './css/App.css';
import UnderConstructionSplash from './components/UnderConstructionSplash';

// Lazy-loaded components
const About = React.lazy(() => import('./pages/AboutMe'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectSingle = React.lazy(() => import('./pages/ProjectSingle'));
const RolesPage = React.lazy(() => import('./pages/RolesPage'));

function App() {
	const [showSplash, setShowSplash] = useState(true);
	return (
		<div classname="App">
			{showSplash && <UnderConstructionSplash onClose={() => setShowSplash(false)} />}
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
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
							<Route path="roles" exact component={RolesPage} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
		</div>
	);
}

export default App;
