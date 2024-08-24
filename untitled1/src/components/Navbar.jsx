import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/assets/logo.png" alt="Jama Bolig Logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/lejligheder">Lejligheder</Link></li>
                <li><a href="#tv-internet">TV / Internet</a></li>
                <li><a href="#ledige-lejemal">Ledige Lejemål</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
