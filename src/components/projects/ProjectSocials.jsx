import React from 'react';
import SocialSharing from '../../data/socialsData';

const ProjectSocials = ({ projectId }) => {
    return (
        <div className="flex items-center gap-3 mt-5">
            {SocialSharing.map((social) => (
                <a
                    key={social.id}
                    href={social.url && social.url(projectId)}
                    target="__blank"
                    aria-label={`Share on ${social.name}`}
                    className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                >
                    <span className="text-lg lg:text-2xl">
                        {social.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default ProjectSocials;