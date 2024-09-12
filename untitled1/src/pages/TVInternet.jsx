// src/pages/TVInternet.jsx

import React from 'react';
import './TVInternet.css'; // Make sure this path is correct

const TVInternet = () => {
    return (
        <div className="tv-internet-page">
            <h1>TV / Internet</h1>

            {/* Content Section with Flexbox */}
            <div className="content-section">
                {/* Left Content */}
                <div className="text-content">
                    <section className="tv-section">
                        <h2>TV-tjenester</h2>
                        <p>
                            Der er mulighed for kabel-tv i alle lejemål, leveret af Glentevejs Antennelaug eller YouSee. Uanset om du er fan af sport, film eller serier, kan du finde en passende pakke, der opfylder dine underholdningsbehov.
                            Desuden tilbyder Næsby Antennelaug også et udvalg af tv-pakker, så du har mange kanaler og muligheder.
                        </p>
                        <p>
                            Udforsk forskellige tv-pakker med hundredvis af kanaler, herunder HD-muligheder og specialbundles. Kontakt din udbyder for flere detaljer og vælg den bedste plan, der passer til dine præferencer.
                        </p>
                    </section>

                    <section className="internet-section">
                        <h2>Internet-tjenester</h2>
                        <p>
                            Forbliv forbundet med pålidelige højhastigheds internetmuligheder, der er tilgængelige i alle lejligheder. For internet-tjenester henviser vi til TDC.dk, hvor du kan finde et udvalg af planer, der passer til alle behov - fra let browsing til tung streaming og gaming.
                        </p>
                        <p>
                            Uanset om du har brug for en grundlæggende plan til almindelig brug eller en premium højhastighedsforbindelse, er der masser af valg, der kan imødekomme dine krav. Besøg TDC.dk for mere information om tilgængelige internetpakker, og vælg den, der passer bedst til din livsstil.
                        </p>
                    </section>
                </div>

                {/* Right Image */}
                <div className="image-container">
                    <img src="/assets/familyinternet.jpg" alt="Familie ser film sammen" className="tv-internet-image" />
                </div>
            </div>
        </div>
    );
};

export default TVInternet;
