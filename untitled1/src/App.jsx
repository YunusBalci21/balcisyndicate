import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Unsgaardsgade17 from './pages/unsgaardsgade17';
import SophieBreumsvej1 from './pages/sophiebreumsvej1';
import Skibhusvej96 from './pages/skibhusvej96';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
    return (
        <Router>
            <Navbar /> {/* Render the Navbar here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lejligheder" element={<Apartments />} />
                <Route path="/unsgaardsgade17" element={<Unsgaardsgade17 />} />
                <Route path="/sophiebreumsvej1" element={<SophieBreumsvej1 />} />
                <Route path="/skibhusvej96" element={<Skibhusvej96 />} />
                {/* Define routes for other pages */}
            </Routes>
        </Router>
    );
}

export default App;
