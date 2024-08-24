import React from 'react';
import { Link } from 'react-router-dom';
import './apartmentdetail.css';

const SophieBreumsvej1 = () => {
    return (
        <div className="apartment-detail">
            <h1>Sophie Breumsvej 1, 5000 Odense C</h1>
            <div className="apartment-images">
                <img src="/assets/sb1-forside02.jpg" alt="Sophie Breumsvej 1" />
            </div>
            <div className="apartment-info">
                <p>På Sophie Breums vej 1, har Jama bolig 29 1-værelses lejligheder i forskellige størrelser og tre 2-værelses lejligheder. Bygningen er sidst renoveret i 2000.</p>
                <ul>
                    <li>1-værelses: 27-32m2, 2.645-2.895 kr pr. måned</li>
                    <li>2-værelses: 38-45m2, 3.350-3.750 kr pr. måned</li>
                    <li>Depositum: 3 måneders husleje</li>
                    <li>Fri vask inkluderet i huslejen</li>
                </ul>
            </div>
            <div className="apartment-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.640689357327!2d10.388576415698406!3d55.39823968045526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cecc4d6c70dd3%3A0x40a76f4cbba1f3c7!2sSophie%20Breumsvej%201%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1631545645921!5m2!1sen!2sus"
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

export default SophieBreumsvej1;
