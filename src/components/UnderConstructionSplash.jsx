import React, { useState } from "react";
import changelogData from "../data/changelogData";

const UnderConstructionSplash = ({ onClose }) => {
	const [showChangelog, setShowChangelog] = useState(false);

	const handleClickOutside = (e) => {
		if (e.target.className.includes("outside")) {
			onClose();
		}
	};

	return (
		<div
			onClick={handleClickOutside}
			className="outside fixed inset-0 bg-filter bg-secondary-light bg-opacity-50 flex items-center justify-center z-50"
		>
			<div className="bg-primary-light dark:bg-primary-dark shadow-lg flex-row rounded-lg relative max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl max-h-screen">
				<button
					onClick={onClose}
					className="px-4 font-bold text-primary-dark dark:text-primary-light absolute top-4 right-4"
				>
					&times;
				</button>
				<h1 className="text-4xl mb-4 text-primary-dark dark:text-primary-light p-5 border-b border-ternary-light dark:border-ternary-dark">
					Under Construction
				</h1>
				<p className="mb-6 p-5 text-primary-dark dark:text-primary-light">
					Stay tuned for more updates!
				</p>
				<div className="flex justify-between items-end p-5 border-t border-ternary-light dark:border-ternary-dark">
					<button
						onClick={onClose}
						className="px-4 py-2 text-primary-light  bg-indigo-500 hover:bg-ternary-dark  dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
						//  bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
					>
						Continue to site
					</button>
					<button
						onClick={() => setShowChangelog(!showChangelog)}
						className="px-4 py-2 text-primary-light   bg-gray-600 hover:bg-ternary-dark dark:bg-secondary-dark dark:text-secondary-light dark:hover:text-secondary-dark  dark:hover:bg-primary-light  rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
					>
						{showChangelog ? "Hide" : "Show"} Changelog
					</button>
				</div>
				{showChangelog && (
					<div className="transition-height duration-500 overflow-hidden p-5">
						<ul className="text-primary-dark dark:text-primary-light">
							{changelogData.map((log, index) => (
								<li
									key={index}
									className="mb-4 p-4 border rounded-lg shadow-md"
								>
									<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
										<strong>{log.date}</strong>:{" "}
										{log.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default UnderConstructionSplash;
