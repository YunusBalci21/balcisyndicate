import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Admin from './pages/Admin'; // Import Admin component
import Login from './pages/Login'; // Import Login component
import Unsgaardsgade17 from './pages/unsgaardsgade17';
import SophieBreumsvej1 from './pages/sophiebreumsvej1';
import Skibhusvej96 from './pages/skibhusvej96';
import Skibhusvej81 from './pages/skibhusvej81';
import Rugardsvej60 from './pages/rugardsvej60';
import Klosterbakken13 from './pages/klosterbakken13';
import TVInternet from './pages/TVInternet';
import LedigeLejemaal from './pages/LedigeLejemaal';
import Kontakt from './pages/Kontakt'; // Import the Kontakt component
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute.jsx'; // Import PrivateRoute component

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lejligheder" element={<Apartments />} />
                <Route path="/unsgaardsgade17" element={<Unsgaardsgade17 />} />
                <Route path="/sophiebreumsvej1" element={<SophieBreumsvej1 />} />
                <Route path="/skibhusvej96" element={<Skibhusvej96 />} />
                <Route path="/skibhusvej81" element={<Skibhusvej81 />} />
                <Route path="/rugardsvej60" element={<Rugardsvej60 />} />
                <Route path="/klosterbakken13" element={<Klosterbakken13 />} />
                <Route path="/tv-internet" element={<TVInternet />} />
                <Route path="/ledige-lejemaal" element={<LedigeLejemaal />} />
                <Route path="/kontakt" element={<Kontakt />} /> {/* Add the route for Kontakt */}
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Apartments />} />
                <Route path="/admin" element={<Admin />} />
                {/* Protected Admin Route */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
