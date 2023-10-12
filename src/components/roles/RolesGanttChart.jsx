// src/components/roles/RolesGanttChart.jsx
import React from 'react';
import RoleGanttEntry from './RoleGanttEntry';
import { useRoles } from '../../context/RolesContext';

const RolesGanttChart = () => {
  const { roles } = useRoles();

  return (
    <div>
      {roles.map(role => (
        <RoleGanttEntry key={role.id} role={role} />
      ))}
    </div>
  );
};

export default RolesGanttChart;
