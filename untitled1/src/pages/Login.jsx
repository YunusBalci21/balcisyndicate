// frontend/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: credentials.email,
                password: credentials.password
            });

            localStorage.setItem('authToken', response.data.token);
            window.location.href = '/admin';
        } catch (error) {
            setError('Forkerte loginoplysninger'); // Error message in Danish
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Admin Login</h1>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Adgangskode"
                    required
                />
                <button type="submit">Log ind</button>
                <p>Kun for autoriserede brugere</p>
            </form>
        </div>
    );
};

export default Login;
