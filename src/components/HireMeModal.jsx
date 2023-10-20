import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import React from "react";
import { InlineWidget } from "react-calendly";

const HireMeModal = ({ onClose }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-4xl mx-5 xl:max-w-4xl lg:max-w-4xl md:max-w-4xl h-1/2 bg-secondary-light dark:bg-primary-dark shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className="text-primary-dark dark:text-primary-light text-xl">
								Meet with me
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<InlineWidget url="https://calendly.com/mikasoft-xyz/hire-me" />
						</div>
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
							<span
								onClick={onClose}
								type="button"
								className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
								aria-label="Close Modal"
							>
								Close
							</span>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
