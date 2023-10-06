import React from 'react';
import { useSingleProject } from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { projectData, error } = useSingleProject();

	if (error) {
		return <p>Error loading project gallery</p>;
	}

	// if (!projectData) {
	// 	return <p>Loading...</p>;
	// }

	const { ProjectImages = [] } = projectData;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{ProjectImages.map((project) => (
				<div className="mb-10 sm:mb-0" key={project.id}>
					<img
						src={project.img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={project.title}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
