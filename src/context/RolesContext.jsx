// src/context/RolesContext.jsx
import React, { createContext, useContext, useState } from 'react';

const RolesContext = createContext();

export const RolesProvider = ({ children }) => {
  const [roles, setRoles] = useState([]); // Fetch your roles data and set it here

  return (
    <RolesContext.Provider value={{ roles, setRoles }}>
      {children}
    </RolesContext.Provider>
  );
};

export const useRoles = () => {
  return useContext(RolesContext);
};
