// src/components/roles/RolesDescriptions.jsx
import React from 'react';
import RoleDescriptionEntry from './RoleDescriptionEntry';
import { useRoles } from '../../context/RolesContext';

const RolesDescriptions = () => {
  const { roles } = useRoles();

  return (
    <div>
      {roles.map(role => (
        <RoleDescriptionEntry key={role.id} role={role} />
      ))}
    </div>
  );
};

export default RolesDescriptions;
