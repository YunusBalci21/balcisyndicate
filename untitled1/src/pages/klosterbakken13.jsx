import React from 'react';
import { Link } from 'react-router-dom';
import './apartmentdetail.css';

const Klosterbakken13 = () => {
    return (
        <div className="apartment-detail">
            <h1>Klosterbakken 13, 5000 Odense C</h1>
            <div className="apartment-images">
                <img src="/assets/klosterbakken1315.jpg" alt="Klosterbakken 13" />
            </div>
            <div className="apartment-info">
                <p>Nye lejligheder i det gamle tugthus centralt placeret i hjertet af Odense. 26 stk. 2-3 værelsers lejligheder fra 37-115m2. Lejlighederne er udstyret med alt i hårde hvidevarer.</p>
                <ul>
                    <li>2-værelses, 37-66m2: 4.500-5.700 kr pr. måned</li>
                    <li>3-værelses, 76-115m2: 6.900-10.000 kr pr. måned</li>
                    <li>Depositum: 3 måneders husleje</li>
                </ul>
            </div>
            <div className="apartment-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.640689357327!2d10.388576415698406!3d55.39823968045526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cecc4d6c70dd3%3A0x40a76f4cbba1f3c7!2sKlosterbakken%2013%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1631545645921!5m2!1sen!2sus"
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

export default Klosterbakken13;
