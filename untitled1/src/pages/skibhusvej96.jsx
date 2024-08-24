import React from 'react';
import { Link } from 'react-router-dom';
import './ApartmentDetail.css';

const Skibhusvej96 = () => {
    return (
        <div className="apartment-detail">
            <h1>Skibhusvej 96, 5000 Odense C</h1>
            <div className="apartment-images">
                <img src="/assets/skibhusvej96.jpg" alt="Skibhusvej 96" />
            </div>
            <div className="apartment-info">
                <p>På Skibhusvej 96, har Jama bolig to 2-værelses lejligheder, en 3-værelses lejlighed og en 2-værelses “Penthouse” lejlighed. Alle lejlighederne har eget køkken, bad og toilet.</p>
                <ul>
                    <li>2-værelses, 55m2: 5.200 kr pr. måned</li>
                    <li>3-værelses, 76m2: 6.200 kr pr. måned</li>
                    <li>Penthouse, 90m2: 6.800 kr pr. måned</li>
                    <li>Depositum: 3 måneders husleje</li>
                </ul>
            </div>
            <div className="apartment-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.640689357327!2d10.388576415698406!3d55.39823968045526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cecc4d6c70dd3%3A0x40a76f4cbba1f3c7!2sSkibhusvej%2096%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1631545645921!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <Link to="/lejligheder" className="back-button">Tilbage til lejligheder</Link>
        </div>
    );
};

export default Skibhusvej96;
