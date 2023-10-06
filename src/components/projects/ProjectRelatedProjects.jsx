import React from 'react';
import { useSingleProject } from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { projectData, error } = useSingleProject();

	if (error) {
		return <p>Error loading related projects</p>;
	}

	if (!projectData) {
		return <p>Loading...</p>;
	}

	const { RelatedProject } = projectData;

	// Check if there are related projects available
	const hasRelatedProjects = RelatedProject?.Projects?.length > 0;

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedProject?.title || 'Related Projects'}
			</p>

			{hasRelatedProjects ? (
				<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
					{RelatedProject?.Projects?.map(project => (
						<img
							src={project.img}
							className="rounded-xl cursor-pointer"
							alt={project.title}
							key={project.id}
						/>
					))}
				</div>
			) : (
				<p>No related projects available.</p>
			)}
		</div>
	);
};

export default ProjectRelatedProjects;
