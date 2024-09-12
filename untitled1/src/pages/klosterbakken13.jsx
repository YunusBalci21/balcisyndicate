import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './apartmentdetail.css';

// Set the element that the modal will be rendered into
Modal.setAppElement('#root');

// Image paths
const heroImage = '/assets/klosterbakken1315.jpg'; // Corrected hero image path
const images = Array.from({ length: 39 }, (_, index) => `/assets/klosterbakken13/${index + 1}.jpg`);
const initialImages = images.slice(0, 5); // Show only the first 5 images initially

const Klosterbakken13 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // All images for the modal view
    const allImages = [...images];

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
                <img src={heroImage} alt="Klosterbakken 13-15" className="hero-image" />
                <div className="hero-text">
                    <h1>Klosterbakken 13-15, 5000 Odense C</h1>
                    <p>Nye lejligheder i det gamle tugthus centralt placeret i hjertet af Odense.</p>
                </div>
            </div>

            {/* Description Section */}
            <div className="apartment-content">
                <p>
                    Klosterbakken 13-15 ligger i hjertet af Odense og tilbyder moderne lejligheder i en historisk bygning, der engang husede byens tugthus. Med sin centrale beliggenhed har du kort afstand til Odenses bedste restauranter, caféer, butikker og kulturelle attraktioner som H.C. Andersens Hus og byens mange museer. Lejlighederne er nyrenoverede og udstyret med alle nødvendige hårde hvidevarer for at gøre din hverdag bekvem. Fra rummelige stuer til moderne køkkener og badeværelser, her er der tænkt på både funktionalitet og æstetik. Velkommen til en unik mulighed for at bo centralt i Odense i et hjem, der kombinerer komfort og historie.
                </p>
                <ul className="apartment-info">
                    <li>Depositum: 3 måneder husleje</li>
                    <li>Alle priser er excl. el, vand og varme.</li>
                    <li>Kvadratmeter er opgivet i brutto.</li>
                    <li>2v., 37-66 m² - Månedlig leje: 4500-5700,-</li>
                    <li>3v., 76-115 m² - Månedlig leje: 6900-10000,-</li>
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
                        alt={`Klosterbakken Interior ${selectedImageIndex + 1}`}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.663546134809!2d10.383789015923268!3d55.40190358047095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c2b5b7a79f4e7%3A0x9ff297b9bb22644c!2sKlosterbakken%2013%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sus!4v1617172877877!5m2!1sen!2sus"
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

export default Klosterbakken13;
