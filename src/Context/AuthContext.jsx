import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (persist state across page reloads)
  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login state changes
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');  // Store login state in localStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');  // Remove login state from localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
