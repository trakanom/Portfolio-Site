// Import images
import WebImage1 from '../images/web-project-1.jpg';
import ParserImage1 from '../images/projects/bank_statement_conversion.png';
import VideoImage1 from '../images/projects/video_compression.png';
import ETLImage1 from '../images/projects/job_platform.png';
import BottingImage1 from '../images/projects/botting.png';
import OptimizationImage1 from '../images/projects/optimization_consulting.png';
import SecurityImage1 from '../images/projects/security_consulting3.png';
import LifeImage1 from '../images/projects/life2.png';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Video Library Compression',
		category: 'Tools and Scripts',
		description: [
			'Embarking on a journey to compress video files, I engineered a Python-based script that utilized bit rate density analysis and hardware-accelerated encoding. The challenge was to maintain video quality while significantly reducing file size. The fun part was experimenting with different encoding algorithms and observing their impact on video quality and size. The result was a 90% reduction in file size without a significant compromise in quality, which was a delightful win! If revisited, I’d explore parallel processing to further speed up the compression process.',
		],
		short_description: 'A Python-based script for video compression using bit rate density analysis, achieving a 90% reduction in file size without significant quality loss.',
		link: 'LINK',
		date: 'Jun 2023',
		img: VideoImage1,
		ProjectHeader: {
			title: 'Video Library Compression',
			publishDate: 'Jun 2023',
			tags: 'Optimization, Algorithm Design, Tools and Scripts',
		},
	},
	{
		id: 2,
		title: 'Bank Statement Parser',
		category: 'Tools and Scripts',
		description: [
			'The Bank Statement Parser was born out of a need to streamline data processing and reduce manual data entry. Utilizing Python and libraries like tabula and pandas, I developed a custom application that parsed bank statement PDFs and converted the data into a more manageable format. The tricky part was handling various formats of bank statements and ensuring accurate data extraction, which was both challenging and an interesting problem to solve. In hindsight, implementing machine learning for intelligent data extraction could enhance its capabilities.',
		],
		short_description: 'Developed a Python application for parsing bank statements, improving data processing efficiency by 100% and reducing manual data entry.',
		link: 'LINK',
		date: 'Nov 2022',
		img: ParserImage1,
		ProjectHeader: {
			title: 'Bank Statement Parser',
			publishDate: 'Nov 2022',
			tags: 'Tools and Scripts, Data Management',
		},
	},
	{
		id: 3,
		title: 'Job Application Tracking ETL',
		category: 'Data Projects',
		description: [
			'Developing the Job Application Tracking System was a journey through data management and automation. The goal was to automate the organization of job applications and reduce manual data entry. Leveraging Python and various APIs, I crafted a system that scraped emails, parsed HTML, and post-processed data, which was not only a fun exploration into automation but also a valuable tool in managing job applications. The challenge lay in accurately extracting and categorizing data from various email formats, which was a puzzle in itself. If done again, I’d explore more scalable and robust data storage solutions.',
		],
		short_description: 'Automated Job Application Tracking System using Python and various APIs, reducing data entry by 95% and improving tracking efficiency.',
		link: 'LINK',
		date: 'Sep 2022',
		img: ETLImage1,
		ProjectHeader: {
			title: 'Job Application Tracking ETL',
			publishDate: 'Sep 2022',
			tags: 'Data Projects, Automation',
		},
	},
	{
		id: 4,
		title: 'High-End MMORPG Automation',
		category: 'Machine Learning',
		description: [
			'The project aimed to optimize and automate MMORPG gameplay using Machine Learning techniques, which was an exciting intersection of gaming and AI. Developing unique character configuration files and scripted strategies was a fun exploration into game dynamics and AI strategy development. The easy part was letting the AI take over the gameplay, while the challenge was in ensuring the strategies adapted to changing game dynamics. If revisited, I would explore more advanced AI techniques and perhaps delve into reinforcement learning for strategy optimization.',
		],
		short_description: 'Applied Machine Learning to optimize and automate MMORPG gameplay, reducing routine task time and improving gameplay performance.',
		link: 'LINK',
		date: '2012–2017',
		img: BottingImage1,
		ProjectHeader: {
			title: 'Gameplay Automation & ML Optimization',
			publishDate: '2012–2017',
			tags: 'Game Development, Machine Learning, Automation',
		},
	},
	{
		id: 5,
		title: 'Smart Contract Algorithm Redesign',
		category: 'Smart Contract Development',
		description: [
			'Redesigning the Solidity smart contract algorithm for Alchemix was a deep dive into blockchain technology and algorithm development. The project aimed to enhance system performance and was a critical task due to the financial implications involved. The fun part was developing innovative algorithms for Transmuter V2 and seeing them successfully deployed on the blockchain. The challenge was ensuring the algorithm’s accuracy and effectiveness while maintaining system robustness and reliability. If done again, I would explore further optimizations and perhaps involve more extensive testing phases.',
		],
		short_description: 'Redesigned Solidity smart contract algorithm, enhancing system performance by 30% and contributing to a $270M increase in ALCX market capitalization.',
		link: 'LINK',
		date: 'Mar 2021',
		img: OptimizationImage1,
		ProjectHeader: {
			title: 'Smart Contract Algorithm Redesign',
			publishDate: 'Mar 2021',
			tags: 'Smart Contract Development, Algorithm Design',
		},
	},
	{
		id: 6,
		title: 'Smart Contract Code Audit',
		category: 'Analysis',
		description: [
			'Conducting a functional code audit for ElasticDAO’s smart contracts was a meticulous and crucial task, aimed at securing over $5M in community assets. The challenge and excitement lay in validating mathematical edge cases and resolving complex mathematical proofs, ensuring the security and integrity of blockchain transactions. The collaboration with a diverse team of experts was a learning experience, and if done again, I would probably automate some parts of the audit to enhance efficiency and accuracy.',
		],
		short_description: 'Led a functional code audit for ElasticDAO’s smart contracts, enhancing blockchain transaction security and protecting community assets.',
		link: 'LINK',
		date: 'Mar 2021',
		img: SecurityImage1,
		ProjectHeader: {
			title: 'Smart Contract Code Audit',
			publishDate: 'Mar 2021',
			tags: 'Analysis, Smart Contract Development',
		},
	},
	{
		id: 7,
		title: 'Terminal Game of Life',
		category: 'Game Development',
		description: [
			'Creating an ASCII version of Conway’s Game of Life with Python was a nostalgic and fun project, blending classic game theory with modern coding. The project used set theory and number theory to create a novel, albeit not the most efficient, algorithm. The fun part was seeing the ASCII characters come to life in the console, creating a dynamic, evolving pattern. The challenge was balancing performance with novelty in the algorithm. If revisited, I’d explore more efficient algorithms and perhaps create a GUI version of the game.',
		],
		short_description: 'Developed an ASCII version of Conway’s Game of Life using Python, exploring set theory and number theory in algorithm development.',
		link: 'LINK',
		date: 'Oct 2020',
		img: LifeImage1,
		ProjectHeader: {
			title: 'ASCII Conway’s Game of Life',
			publishDate: 'Oct 2020',
			tags: 'IT, Game Development',
		},
	},
];
