// // src/pages/RolesPage.jsx
// import React from 'react';
// import RolesSection from '../components/roles/RolesSection';

// const RolesPage = () => {
//   return (
//     <main>
//       <h1>My Professional Journey</h1>
//       <div>
//         <p>Testing testing 1,2,3...</p>
//       </div>
//       <RolesSection />
//     </main>
//   );
// };

// export default RolesPage;



import RolesSection from '../components/roles/RolesSection';
import { RolesProvider } from '../context/RolesContext';

const Roles = () => {
	return (
		<RolesProvider>
			<div className="container mx-auto">
				<RolesSection />
			</div>
		</RolesProvider>
	);
};

export default Roles;
