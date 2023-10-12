// src/components/roles/RolesSection.jsx
import React from 'react';
import RolesGanttChart from './RolesGanttChart';
import RolesDescriptions from './RolesDescriptions';
import { RolesProvider } from '../../context/RolesContext';
import { rolesData } from '../../data/rolesData';

const RolesSection = () => {
  return (
    <RolesProvider>
      <RolesGanttChart />
      <RolesDescriptions />
    </RolesProvider>
  );
};

export default RolesSection;
