import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './LedigeLejemaal.css';

const LedigeLejemaal = () => {
    const properties = [
        {
            id: 1,
            title: '3-værelses Delevenlig Lejlighed',
            location: 'Klosterbakken 13, 5000 Odense C',
            description: 'Rummelig lejlighed ideel til deling eller familieliv, centralt beliggende i Odense.',
            details: '112m² | Ledig fra 1/9-24 | 8.800 kr. pr. md. + forbrug',
            image: '/assets/klosterbakken1315.jpg',
        },
        {
            id: 2,
            title: 'Butikslejemål',
            location: 'Skibhusvej 81, 5000 Odense C',
            description: 'Attraktivt lejemål ideelt til butik, klinik eller liberalt erhverv, med høj synlighed.',
            details: '105m² | Ledigt fra 1/9-24 | 4.500 kr. pr. md. + forbrug',
            image: '/assets/skibhus81.jpg',
        }
    ];

    return (
        <div className="available-rentals-page">
            <h1>Ledige Lejemål</h1>
            <p className="intro-text">Find dit næste hjem eller forretningssted med vores ledige lejemål i Odense.</p>
            <div className="property-list">
                {properties.map((property) => (
                    <div className="property-card" key={property.id}>
                        <img src={property.image} alt={property.title} className="property-image" />
                        <h2>{property.title}</h2>
                        <h3>{property.location}</h3>
                        <p>{property.description}</p>
                        <p className="details">{property.details}</p>
                        <Link to="/kontakt" className="contact-button">Kontakt os for mere information</Link> {/* Update button to Link */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LedigeLejemaal;
