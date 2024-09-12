import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './apartmentdetail.css';

// Set the element that the modal will be rendered into
Modal.setAppElement('#root');

// Image paths
const heroImage = '/assets/Rugårdsvej-60-jamabolig-1-1024x768.jpg'; // Ensure this path is correct and the file exists
const images = Array.from({ length: 8 }, (_, index) => `/assets/rugaardsvej60/${index + 1}.jpg`); // Assuming there are 8 images
const initialImages = images.slice(0, 5); // Show only the first 5 images initially

const Rugardsvej60 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // All images for the modal view
    const allImages = images;

    // Open modal and set the selected image index
    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    // Handle navigation to the previous image
    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
        );
    };

    // Handle navigation to the next image
    const handleNext = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="apartment-detail">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-image-container">
                    <img src={heroImage} alt="Rugårdsvej 60" className="hero-image" />
                    <div className="hero-text">
                        <h1>Rugårdsvej 60, 5000 Odense C</h1>
                        <p>Ungdoms- og studielejligheder med moderne faciliteter i et attraktivt kvarter.</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="apartment-content">
                <p>
                    Velkommen til Rugårdsvej 60 - et attraktivt og centralt placeret boligområde i Odense. Her finder du 12 ungdoms- og studielejligheder, alle med moderne faciliteter og gode indkøbsmuligheder tæt på. Lejlighederne er designet til at imødekomme de unges behov og tilbyder både muligheder med og uden hems. Hver lejlighed er udstyret med eget køkken, badeværelse og hårde hvidevarer, hvilket giver en bekvem og komfortabel hverdag.
                </p>
                <p>
                    Ungdomslejlighederne er ca. 50 m² og har en månedlig husleje på 4.300 kr. plus forbrug. Depositum udgør 3 måneders husleje.
                </p>
                <ul className="apartment-info">
                    <li>Ungdomslejligheder med og uden hems: ca. 50 m²</li>
                    <li>Månedlig leje: 4.300 kr. pr. måned + forbrug</li>
                    <li>Depositum: 3 måneders husleje</li>
                </ul>
                <button className="contact-button" onClick={() => window.location.href = '/kontakt'}>
                    Kontakt os for mere information
                </button>
            </div>

            {/* Image Gallery */}
            <div className="image-gallery">
                <div className="main-image-container">
                    <img
                        src={initialImages[0]}
                        alt="Main View"
                        className="main-image"
                        onClick={() => openModal(0)}
                    />
                </div>
                <div className="grid-images">
                    {initialImages.map((thumb, index) => (
                        <div className="grid-item" key={index}>
                            <img
                                src={thumb}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => openModal(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for viewing images */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="image-modal"
                overlayClassName="image-modal-overlay"
            >
                <button onClick={closeModal} className="close-button">&times;</button>

                <div className="modal-content">
                    {/* Left Arrow */}
                    <button onClick={handlePrev} className="nav-button prev-button">&#10094;</button>

                    <img
                        src={allImages[selectedImageIndex]}
                        alt={`Rugårdsvej Interior ${selectedImageIndex + 1}`}
                        className="modal-main-image"
                    />

                    {/* Right Arrow */}
                    <button onClick={handleNext} className="nav-button next-button">&#10095;</button>

                    <div className="modal-thumbnails">
                        {allImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                onClick={() => setSelectedImageIndex(idx)}
                                className={selectedImageIndex === idx ? 'selected' : ''}
                            />
                        ))}
                    </div>
                </div>
            </Modal>

            {/* Map Section Styled Consistently */}
            <div className="apartment-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.640689357327!2d10.388576415698406!3d55.39823968045526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cecc4d6c70dd3%3A0x40a76f4cbba1f3c7!2sRug%C3%A5rdsvej%2060%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1631545645921!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            <Link to="/lejligheder" className="back-button">Tilbage til lejligheder</Link>
        </div>
    );
};

export default Rugardsvej60;
