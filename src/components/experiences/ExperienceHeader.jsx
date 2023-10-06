import React from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { useSingleExperience } from '../../context/SingleExperienceContext';

function ExperienceSingleHeader({ data }) {
	const { projectData, error } = useSingleExperience();
	if (!data) {
		return null; // or return null, or a loader component
	}
	if (error) {
		return <p>Error loading project header</p>;
	}

	// if (!projectData) {
	// 	return <p>Loading...</p>;
	// }

	const { ExperienceHeader } = projectData;

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{ExperienceHeader.ExperienceHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{ExperienceHeader.ExperienceHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{ExperienceHeader.ExperienceHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSingleHeader;
