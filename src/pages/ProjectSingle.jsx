import React from 'react';
import { useSingleProject } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
const ProjectSingle = () => {
	const { projectData, error } = useSingleProject();

	if (error || !projectData) {
		return <div>Project not found</div>;
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<ProjectHeader projectData={projectData} />
			<ProjectGallery projectData={projectData} />
			<ProjectInfo projectData={projectData} />
			<ProjectRelatedProjects projectData={projectData} />
			{/* <SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider> */}
		</motion.div>
	);
};

export default ProjectSingle;
