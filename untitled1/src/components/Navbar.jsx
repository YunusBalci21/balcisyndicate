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
                <li><Link to="/tv-internet">TV / Internet</Link></li>
                <li><Link to="/ledige-lejemaal">Ledige Lejemål</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li> {/* Correct link to Kontakt */}
            </ul>
        </nav>
    );
};

export default Navbar;
