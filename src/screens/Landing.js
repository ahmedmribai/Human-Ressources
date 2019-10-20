import React from 'react';

// import compounds
import NavbarCustom from '../compounents/NavbarCustom';
import DescCarousel from '../compounents/Landing/DescCarousel';

const Landing = () => {
    return (
        <div className = "landingContainer">
            <NavbarCustom />
            <DescCarousel />
            <p>created by seven</p>
        </div>
    );
}

export default Landing;