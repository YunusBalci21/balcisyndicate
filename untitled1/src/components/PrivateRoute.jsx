import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check authentication status
const isAuthenticated = () => {
    // Implement your authentication logic here (e.g., check local storage for a token)
    return localStorage.getItem('authToken') !== null;
};

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
