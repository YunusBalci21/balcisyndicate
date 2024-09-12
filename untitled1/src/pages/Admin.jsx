import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Import your CSS file

const Admin = () => {
    // State for form fields
    const [apartmentData, setApartmentData] = useState({
        title: '',
        address: '',
        description: '',
        price: '',
        size: '',
        rooms: '',
    });
    const [images, setImages] = useState([]);
    const [message, setMessage] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApartmentData({ ...apartmentData, [name]: value });
    };

    // Handle image file selection
    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the page from refreshing

        const formData = new FormData();
        // Append form data
        for (const key in apartmentData) {
            formData.append(key, apartmentData[key]);
        }
        // Append images to form data
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.post('http://localhost:5000/api/protected/admin/apartment', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            setMessage('Lejlighed tilføjet med succes!'); // Success message
        } catch (error) {
            console.error('Error uploading apartment:', error);
            setMessage('Der opstod en fejl ved tilføjelse af lejligheden.'); // Error message in Danish
        }
    };

    return (
        <div className="admin-container">
            <form onSubmit={handleSubmit} className="admin-form">
                <h1>Tilføj Lejlighed</h1>
                {message && <p className="status-message">{message}</p>}
                <input
                    type="text"
                    name="title"
                    value={apartmentData.title}
                    onChange={handleInputChange}
                    placeholder="Titel"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={apartmentData.address}
                    onChange={handleInputChange}
                    placeholder="Adresse"
                    required
                />
                <textarea
                    name="description"
                    value={apartmentData.description}
                    onChange={handleInputChange}
                    placeholder="Beskrivelse"
                    required
                ></textarea>
                <input
                    type="number"
                    name="price"
                    value={apartmentData.price}
                    onChange={handleInputChange}
                    placeholder="Pris"
                    required
                />
                <input
                    type="text"
                    name="size"
                    value={apartmentData.size}
                    onChange={handleInputChange}
                    placeholder="Størrelse (f.eks., 112m²)"
                    required
                />
                <input
                    type="number"
                    name="rooms"
                    value={apartmentData.rooms}
                    onChange={handleInputChange}
                    placeholder="Antal værelser"
                    required
                />
                <input
                    type="file"
                    name="images"
                    onChange={handleImageChange}
                    multiple
                    required
                />
                <button type="submit">Tilføj Lejlighed</button>
            </form>
        </div>
    );
};

export default Admin;
