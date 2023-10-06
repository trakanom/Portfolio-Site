import React from 'react';
import { useSingleExperience } from '../../context/SingleExperienceContext';

const ExperienceGallery = () => {
	const { projectData, error } = useSingleExperience();

	if (error) {
		return <p>Error loading project gallery</p>;
	}

	// if (!projectData) {
	// 	return <p>Loading...</p>;
	// }

	const { ExperienceImages = [] } = projectData;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{ExperienceImages.map((project) => (
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

export default ExperienceGallery;
