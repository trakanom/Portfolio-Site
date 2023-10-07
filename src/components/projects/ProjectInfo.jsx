import React from 'react';
import { useSingleProject } from '../../context/SingleProjectContext';
import ProjectSocials from './ProjectSocials';
import HeaderInfo from '../../data/defaultsData'
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
	const hasProjectDetails = ProjectInfo?.ProjectDetails?.length > 0;

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				{hasCompanyInfo && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{ProjectInfo.ClientHeading || HeaderInfo.ClientHeading}
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
							{ProjectInfo.ObjectivesHeading || HeaderInfo.ObjectivesHeading}
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
							{ProjectInfo.Technologies[0].title || HeaderInfo.TechnologyHeader}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{ProjectInfo.Technologies[0].techs.join(', ')}
						</p>
					</div>
				)}
				{/* Single project social sharing */}
				{projectData.id && (
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							Share this project
						</p>
						<ProjectSocials projectId={projectData.id} />
					</div>
				)
				}
			</div>

			{/*  Single project right section */}
			{hasProjectDetails && (
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{ProjectInfo.ProjectDetailsHeading || HeaderInfo.ProjectDetailsHeading}
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
