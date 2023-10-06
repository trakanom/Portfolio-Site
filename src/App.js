import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import UseScrollToTop from './hooks/useScrollToTop';
import { SingleProjectProvider } from './context/SingleProjectContext';
import './css/App.css';

// Lazy-loaded components
const About = React.lazy(() => import('./pages/AboutMe'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Experience = React.lazy(() => import('./pages/Experience'));
const ProjectSingle = React.lazy(() => import('./pages/ProjectSingle'));


function App() {
	return (
		<AnimatePresence>
			<div className="flex flex-col min-h-screen bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<div className="flex-grow">
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
								<Route path="experience" element={<Experience />} />
							</Routes>
						</Suspense>
					</div>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}


export default App;
