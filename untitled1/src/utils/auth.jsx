export const isAuthenticated = () => {
    // Check if the user is authenticated
    return localStorage.getItem('admin_token') !== null;
};

export const login = (token) => {
    localStorage.setItem('admin_token', token);
};

export const logout = () => {
    localStorage.removeItem('admin_token');
};
