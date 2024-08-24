import React from 'react';
import { Link } from 'react-router-dom';
import './apartmentdetail.css';

const Unsgaardsgade17 = () => {
    return (
        <div className="apartment-detail">
            <h1>Unsgaardsgade 17, 5000 Odense C</h1>
            <div className="apartment-images">
                <img src="/assets/UGV17_hus-forside.jpg" alt="Unsgaardsgade 17" />
            </div>
            <div className="apartment-info">
                <p>På Unsgaardsgade 17, har Jama bolig otte 2-værelses lejligheder. Alle lejlighederne har eget køkken, bad og toilet. Bygningen er opført i 2002.</p>
                <ul>
                    <li>Depositum: 3 måneders husleje</li>
                    <li>Alle priser er Excl. el, vand og varme</li>
                    <li>Kvadratmeter er opgivet i brutto</li>
                    <li>2-værelses, 58m2</li>
                    <li>Månedlig leje: 5.300,-</li>
                    <li>Antal lejemål: 8</li>
                </ul>
            </div>
            <div className="apartment-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.640689357327!2d10.388576415698406!3d55.39823968045526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cecc4d6c70dd3%3A0x40a76f4cbba1f3c7!2sUnsgaardsgade%2017%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1631545645921!5m2!1sen!2sus"
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

export default Unsgaardsgade17;
