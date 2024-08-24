import React from 'react';
import { Link } from 'react-router-dom';
import './Apartments.css';

const Apartments = () => {
    const apartments = [
        {
            id: 1,
            title: 'Unsgaardsgade 17, 5000 Odense C',
            image: '/assets/unsgaardsgade.png',  // Direct path to the image in the public folder
            description: 'Beautiful old building located in the heart of Odense. Perfect for families and young professionals.',
            link: '/unsgaardsgade17',
        },
        {
            id: 2,
            title: 'Sophie Breumsvej 1, 5000 Odense C',
            image: '/assets/sb1-forside02.jpg',  // Direct path to the image in the public folder
            description: 'Modern apartments with all amenities. Close to the city center and public transport.',
            link: '/sophiebreumsvej1',
        },
        {
            id: 3,
            title: 'Skibhusvej 96, 5000 Odense C',
            image: '/assets/skibhusvej96.jpg',  // Direct path to the image in the public folder
            description: 'Recently renovated building offering spacious apartments. Close to shopping and dining options.',
            link: '/skibhusvej96',
        },
        {
            id: 4,
            title: 'Skibhusvej 81, 5000 Odense C',
            image: '/assets/skibhus81.jpg',  // Direct path to the image in the public folder
            description: 'Cozy apartments located in a quiet area. Ideal for students and singles.',
            link: '/skibhusvej81',
        },
        {
            id: 5,
            title: 'Rugårdsvej 60, 5000 Odense C',
            image: '/assets/Rugårdsvej-60-jamabolig-1-1024x768.jpg',  // Direct path to the image in the public folder
            description: 'Comfortable living spaces with easy access to public transport. Suitable for all age groups.',
            link: '/rugardsvej60',
        },
        {
            id: 6,
            title: 'Klosterbakken 13, 5000 Odense C',
            image: '/assets/klosterbakken1315.jpg',  // Direct path to the image in the public folder
            description: 'Historic building with modern amenities. Perfect for those who appreciate charm and history.',
            link: '/klosterbakken13',
        },
    ];

    return (
        <div className="apartments-page">
            <div className="apartments-container">
                {apartments.map((apartment) => (
                    <Link to={apartment.link} key={apartment.id} className="apartment-card">
                        <img src={apartment.image} alt={apartment.title} />
                        <h2>{apartment.title}</h2>
                        <p>{apartment.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Apartments;
