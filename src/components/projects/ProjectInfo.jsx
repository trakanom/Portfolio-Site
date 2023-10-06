import React from 'react';
import { useSingleProject } from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { projectData, error } = useSingleProject();

	if (error) {
		return <p>Error loading project info</p>;
	}

	if (!projectData) {
		return <p>Loading...</p>;
	}

	const { ProjectInfo } = projectData;
	console.log("MY INFO!", ProjectInfo)
	// Check for the presence of information before rendering
	const hasCompanyInfo = ProjectInfo?.CompanyInfo?.length > 0;
	const hasTechnologies = ProjectInfo?.Technologies?.[0]?.techs?.length > 0;
	const hasObjectives = ProjectInfo?.ObjectivesDetails?.length > 0;
	const hasSocialSharing = ProjectInfo?.SocialSharing?.length > 0;
	const hasProjectDetails = ProjectInfo?.ProjectDetails?.length > 0;

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				{hasCompanyInfo && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{ProjectInfo.ClientHeading || 'Client Information'}
						</p>
						<ul className="leading-loose">
							{ProjectInfo.CompanyInfo.map(info => (
								<li className="font-general-regular text-ternary-dark dark:text-ternary-light" key={info.id}>
									<span>{info.title}: </span>
									<a href={info.details} className={info.title === 'Website' || info.title === 'Phone' ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300' : ''} aria-label="Project Contact Details">
										{info.details}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Single project objectives */}
				{hasObjectives && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{ProjectInfo.ObjectivesHeading || 'Objectives'}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{ProjectInfo.ObjectivesDetails}
						</p>
					</div>
				)}

				{/* Single project technologies */}
				{hasTechnologies && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{ProjectInfo.Technologies[0].title || 'Technologies Used'}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{ProjectInfo.Technologies[0].techs.join(', ')}
						</p>
					</div>
				)}
				{/* Single project social sharing */}
				{hasSocialSharing && (
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{ProjectInfo.SocialSharingHeading}
						</p>
						<div className="flex items-center gap-3 mt-5">
							{ProjectInfo.SocialSharing.map(
								(social) => {
									return (
										<a
											key={social.id}
											href={social.url}
											target="__blank"
											aria-label="Share Project"
											className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
										>
											<span className="text-lg lg:text-2xl">
												{social.icon}
											</span>
										</a>
									);
								}
							)}
						</div>
					</div>
				)
				}
			</div>

			{/*  Single project right section */}
			{hasProjectDetails && (
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{ProjectInfo.ProjectDetailsHeading}
					</p>
					{ProjectInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ProjectInfo;
