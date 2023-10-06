import React from 'react';
import { useSingleExperience } from '../../context/SingleExperienceContext';

const ExperienceRelatedExperiences = () => {
	const { projectData, error } = useSingleExperience();

	if (error) {
		return <p>Error loading related projects</p>;
	}

	if (!projectData) {
		return <p>Loading...</p>;
	}

	const { RelatedExperience } = projectData;

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedExperience.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{RelatedExperience.Experiences.map((project) => (
					<img
						src={project.img}
						className="rounded-xl cursor-pointer"
						alt={project.title}
						key={project.id}
					/>
				))}
			</div>
		</div>
	);
};

export default ExperienceRelatedExperiences;
