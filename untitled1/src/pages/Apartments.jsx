import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Apartments.css';

const Apartments = () => {
    const [priceRange, setPriceRange] = useState([2645, 5300]);
    const [numRooms, setNumRooms] = useState('');
    const [isStudentFriendly, setIsStudentFriendly] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [showStudentDropdown, setShowStudentDropdown] = useState(false);
    const [dynamicApartments, setDynamicApartments] = useState([]);

    // Fetch dynamic apartments from the backend
    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const token = localStorage.getItem('authToken'); // Get the auth token from local storage
                const response = await axios.get('http://localhost:5000/api/protected/admin/apartments', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setDynamicApartments(response.data); // Update the state with fetched apartments
            } catch (error) {
                console.error('Error fetching apartments:', error);
            }
        };
        fetchApartments();
    }, []); // Dependency array ensures it runs on component mount

    // Static apartments data
    const staticApartments = [
        {
            id: 1,
            title: 'Unsgaardsgade 17, 5000 Odense C',
            image: '/assets/unsgaardsgade.png',
            description: 'Smukt gammelt bygning beliggende i hjertet af Odense. Perfekt for familier og unge professionelle.',
            price: 5300,
            rooms: 2,
            studentFriendly: false,
            link: '/unsgaardsgade17',
        },
        {
            id: 2,
            title: 'Sophie Breumsvej 1, 5000 Odense C',
            image: '/assets/sb1-forside02.jpg',
            description: 'Moderne lejligheder med alle faciliteter. Tæt på byens centrum og offentlig transport.',
            price: 2645,
            rooms: 1,
            studentFriendly: true,
            link: '/sophiebreumsvej1',
        },
        {
            id: 3,
            title: 'Skibhusvej 96, 5000 Odense C',
            image: '/assets/skibhusvej96.jpg',
            description: 'Nyrenoveret bygning med rummelige lejligheder. Tæt på shopping og spisesteder.',
            price: 5200,
            rooms: 2,
            studentFriendly: false,
            link: '/skibhusvej96',
        },
        {
            id: 4,
            title: 'Skibhusvej 81, 5000 Odense C',
            image: '/assets/skibhus81.jpg',
            description: 'Hyggelige lejligheder i et roligt område. Ideel til studerende og singler.',
            price: 5000,
            rooms: 2,
            studentFriendly: true,
            link: '/skibhusvej81',
        },
        {
            id: 5,
            title: 'Rugårdsvej 60, 5000 Odense C',
            image: '/assets/Rugårdsvej-60-jamabolig-1-1024x768.jpg',
            description: 'Komfortable boliger med nem adgang til offentlig transport. Velegnet til alle aldersgrupper.',
            price: 4300,
            rooms: 2,
            studentFriendly: false,
            link: '/rugardsvej60',
        },
        {
            id: 6,
            title: 'Klosterbakken 13, 5000 Odense C',
            image: '/assets/klosterbakken1315.jpg',
            description: 'Historisk bygning med moderne faciliteter. Perfekt for dem, der værdsætter charme og historie.',
            price: 4500,
            rooms: 3,
            studentFriendly: false,
            link: '/klosterbakken13',
        },
    ];

    // Function to toggle the dropdown menus
    const toggleDropdown = (dropdown) => {
        if (dropdown === 'rooms') {
            setShowRoomDropdown(!showRoomDropdown);
            setShowStudentDropdown(false);
        } else if (dropdown === 'student') {
            setShowStudentDropdown(!showStudentDropdown);
            setShowRoomDropdown(false);
        }
    };

    // Function to filter apartments based on criteria
    const filterApartments = (apartments) => {
        return apartments.filter((apartment) => {
            const matchesPrice = apartment.price >= priceRange[0] && apartment.price <= priceRange[1];
            const matchesRooms = numRooms === '' || apartment.rooms === Number(numRooms);
            const matchesStudent = !isStudentFriendly || apartment.studentFriendly;

            return matchesPrice && matchesRooms && matchesStudent;
        });
    };

    // Combine both static and dynamic apartments
    const allApartments = [...staticApartments, ...dynamicApartments];

    return (
        <div className="apartments-page">
            <div className="filter-bar">
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => toggleDropdown('rooms')}>
                        Antal Værelser {showRoomDropdown ? '▲' : '▼'}
                    </button>
                    {showRoomDropdown && (
                        <div className="dropdown-content">
                            <button onClick={() => setNumRooms('')}>Alle antal værelser</button>
                            <button onClick={() => setNumRooms('1')}>1 værelse</button>
                            <button onClick={() => setNumRooms('2')}>2 værelser</button>
                            <button onClick={() => setNumRooms('3')}>3 værelser</button>
                        </div>
                    )}
                </div>

                <div className="dropdown">
                    <button className="dropbtn" onClick={() => toggleDropdown('student')}>
                        Studerende {showStudentDropdown ? '▲' : '▼'}
                    </button>
                    {showStudentDropdown && (
                        <div className="dropdown-content">
                            <button onClick={() => setIsStudentFriendly(!isStudentFriendly)}>
                                {isStudentFriendly ? 'Inkluder alle' : 'Kun for studerende'}
                            </button>
                        </div>
                    )}
                </div>

                <div className="slider-container">
                    <label>Prisinterval: {priceRange[0]} - {priceRange[1]} DKK</label>
                    <input
                        type="range"
                        min="2645"
                        max="5300"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="price-slider"
                    />
                </div>
            </div>

            <div className="apartments-container">
                {filterApartments(allApartments).map((apartment) => (
                    <Link to={apartment.link || '#'} key={apartment.id || apartment._id} className="apartment-card">
                        <img src={apartment.image} alt={apartment.title} />
                        <h2>{apartment.title}</h2>
                        <p>{apartment.description}</p>
                        <p>{apartment.price} DKK / måned</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Apartments;
