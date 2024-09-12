import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Kontakt.css';

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_frqe7yn',
            'template_ln96xns',
            {
                from_name: formData.name,
                to_name: 'Jama Bolig',
                reply_to: formData.email,  // Update here
                message: formData.message,
                subject: formData.subject,
                phone: formData.phone,
            },
            'Lt_xr9ou7Cro0PAwz' // Your public key
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('An error occurred. Please try again.');
        });
        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page" id="kontakt">
            <h1>Kontakt</h1>
            <p>Kontakt til Jamabolig</p>
            <p>Jama Bolig v/ Jacob Juul Madsen</p>
            <p>Egestubben 8</p>
            <p>5270 Odense N</p>
            <p>Telefon nr. 63930047 / 40553911</p>
            <p>Øvrig kontakt foregår via mail, skriv dit nummer og vi ringer dig op.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Dit navn (skal udfyldes)
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Din e-mail (skal udfyldes)
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Dit telefon nummer (udfyld hvis muligt)
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Emne
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Din besked
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit">Send besked</button>
            </form>
        </div>
    );
};

export default Kontakt;
