import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './ApartmentDetail.css';

// Set the element that the modal will be rendered into
Modal.setAppElement('#root');

// Image paths
const heroImage = '/assets/skibhusvej96.jpg'; // Ensure this path is correct and the file exists
const images = Array.from({ length: 3 }, (_, index) => `/assets/skibhusvej96/${index + 1}.jpg`); // Assuming there are 3 images
const initialImages = images.slice(0, 3); // Show all images initially

const Skibhusvej96 = () => {
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
                    <img src={heroImage} alt="Skibhusvej 96" className="hero-image" />
                    <div className="hero-text">
                        <h1>Skibhusvej 96, 5000 Odense C</h1>
                        <p>Moderne lejligheder med alle nødvendige faciliteter i hjertet af Odense.</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="apartment-content">
                <p>
                    På Skibhusvej 96 tilbyder Jama Bolig to moderne 2-værelses lejligheder, en rummelig 3-værelses lejlighed og en eksklusiv 2-værelses penthouse-lejlighed. Alle boligerne er udstyret med eget køkken, bad og toilet, hvilket sikrer komfort og privatliv. Nedenfor finder du priser og detaljerede oplysninger om de tilgængelige lejligheder. Du kan også se billeder af de forskellige boliger og selve bygningen.
                </p>
                <p>Alle priser er eksklusive el, vand og varme. Kvadratmeterne er opgivet som bruttoareal.</p>
                <ul className="apartment-info">
                    <li>Depositum: 3 måneders husleje</li>
                </ul>
                <table className="apartment-table">
                    <thead>
                    <tr>
                        <th>Lejlighedstype</th>
                        <th>Antal Værelser</th>
                        <th>Månedlig leje</th>
                        <th>Kvadratmeter</th>
                        <th>Antal lejemål</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2-Værelses</td>
                        <td>2</td>
                        <td>5.200,-</td>
                        <td>55 m²</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3-Værelses</td>
                        <td>3</td>
                        <td>6.200,-</td>
                        <td>76 m²</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Penthouse</td>
                        <td>2</td>
                        <td>6.800,-</td>
                        <td>90 m²</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>
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
                        alt={`Skibhusvej Interior ${selectedImageIndex + 1}`}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.640689357327!2d10.388576415698406!3d55.39823968045526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cecc4d6c70dd3%3A0x40a76f4cbba1f3c7!2sSkibhusvej%2096%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1631545645921!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
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

export default Skibhusvej96;
