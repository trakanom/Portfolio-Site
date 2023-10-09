import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
// eslint-disable-next-line
import { singleProjectData } from '../data/projects';

export const SingleProjectContext = createContext();

export const useSingleProject = () => {
	const context = useContext(SingleProjectContext);
	if (!context) {
		throw new Error('useSingleProject must be used within a SingleProjectProvider');
	}
	return context;
};

export const SingleProjectProvider = ({ children }) => {
	const { projectId } = useParams();
	const [projectData, setProjectData] = useState(null);
	const [error, setError] = useState(false);

	// Ensure projectId is a number
	const numericProjectId = Number(projectId);

	useEffect(() => {
		console.log("Project ID from URL:", projectId);
	
		// Check if projectId is a number
		if (isNaN(numericProjectId)) {
			setError(true);
			return;
		}
	
		const project = projectsData.find(p => p.id === numericProjectId);
		console.log("Found Project Data:", project);
	
		if (!project) {
			setError(true);
			return;
		}
		setProjectData(project);
	}, [projectId, numericProjectId]);

	const value = {
		projectData,
		error,
	};

	return (
		<SingleProjectContext.Provider value={value}>
			{children}
		</SingleProjectContext.Provider>
	);
};

