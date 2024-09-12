import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './ApartmentDetail.css';

// Set the element that the modal will be rendered into
Modal.setAppElement('#root');

// Image paths
const heroImage = '/assets/unsgaardsgade.png'; // First image as the hero image
const images = Array.from({ length: 5 }, (_, index) => `/assets/unsgaardsgade17/${index + 1}.jpg`); // Images 1 to 5

const Unsgaardsgade17 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Open modal and set the selected image index
    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    // Handle navigation to the previous image
    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Handle navigation to the next image
    const handleNext = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="apartment-detail">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-image-container">
                    <img src={heroImage} alt="Unsgaardsgade 17" className="hero-image" />
                    <div className="hero-text">
                        <h1>Unsgaardsgade 17, 5000 Odense C</h1>
                        <p>Moderne 2-værelses lejligheder i hjertet af Odense. Se priser, informationer og billeder nedenfor.</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="apartment-content">
                <p>
                    På Unsgaardsgade 17, tilbyder Jama Bolig otte moderne 2-værelses lejligheder, hver med eget køkken, bad og toilet. Bygningen blev opført i 2002, og du kan herunder se priser og detaljer om lejlighederne. Længere ned kan du udforske billeder af både lejlighederne og bygningen.
                </p>
                <p>Alle priser er ekskl. el, vand og varme. Kvadratmeterne er opgivet i brutto.</p>
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
                        <td>2-værelses</td>
                        <td>2</td>
                        <td>5.300,-</td>
                        <td>58 m²</td>
                        <td>8</td>
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
                        src={images[0]}
                        alt="Main View"
                        className="main-image"
                        onClick={() => openModal(0)}
                    />
                </div>
                <div className="grid-images">
                    {images.map((thumb, index) => (
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
                        src={images[selectedImageIndex]}
                        alt={`Unsgaardsgade Interior ${selectedImageIndex + 1}`}
                        className="modal-main-image"
                    />

                    {/* Right Arrow */}
                    <button onClick={handleNext} className="nav-button next-button">&#10095;</button>

                    <div className="modal-thumbnails">
                        {images.map((img, idx) => (
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.663546134809!2d10.383789015923268!3d55.40190358047095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c2b5b7a79f4e7%3A0x9ff297b9bb22644c!2sUnsgaardsgade%2017%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1617172877877!5m2!1sen!2sus"
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

export default Unsgaardsgade17;
