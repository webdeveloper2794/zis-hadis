// AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { getToken } from '@/utils/getToken';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminRole = () => {
    const token = getToken();
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken.role === 'Admin');
      } catch (error) {
        console.error('Error decoding token:', error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    checkAdminRole();
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, checkAdminRole }}>
      {children}
    </AuthContext.Provider>
  );
};
