import React from 'react';
import './Home.css';

const Home = () => {
    const videoPath = "/introvideo.mp4"; // Path relative to the public folder

    return (
        <div>
            <div className="hero">
                <video controls autoPlay loop muted className="hero-video">
                    <source src={videoPath} type="video/mp4" />
                    <p>Your browser does not support the video tag.</p>
                </video>
                <div className="hero-overlay"></div> {/* Overlay added here */}
                <div className="hero-content">
                    <h1>Lejligheder i Odense - Dit Nye Hjem</h1>
                    <button type="button" onClick={() => window.location.href = "lejligheder"}>
                        Vis ledige lejligheder
                    </button>
                </div>
            </div>

            {/* Rest of your content */}
            <div className="description">
                <div className="description-content">
                    <h2>Jama Bolig - Salg og Udlejning af Lejligheder i Odense</h2>
                    <p>
                        Hos Jama Bolig specialiserer vi os i at udbyde moderne og komfortable lejligheder i Odense. Uanset om du søger en lejlighed i byens centrum eller i de mere rolige områder, har vi det rette match for dig.
                    </p>
                    <p>
                        Med et stort udvalg af ledige lejemål, kan vi tilbyde boliger, der passer til både studerende, familier og professionelle. Vores dedikerede team står klar til at hjælpe dig med at finde dit næste hjem i Odense.
                    </p>
                    <p>
                        Kontakt os i dag for at høre mere om vores aktuelle lejemål og få professionel rådgivning til dit boligbehov.
                    </p>
                    <button type="button" onClick={() => window.location.href = "lejligheder"}>Se ledige boliger</button>
                </div>
                <div className="description-image">
                    <img src="/assets/picture2.jpg" alt="Family enjoying home" />
                </div>
            </div>
        </div>
    );
};

export default Home;
