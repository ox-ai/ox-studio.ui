import React, { useState } from 'react';
import './VNav.css';  // Import the CSS file for styling

const VNav = () => {
    const [isShrunk, setIsShrunk] = useState(true);

    const toggleNavbar = () => {
        setIsShrunk(!isShrunk);
    };

    return (
        <div className={`vertical-navbar ${isShrunk ? 'shrunk' : ''}`}>
            <button className="toggle-btn" onClick={toggleNavbar}>
                {isShrunk ? '☰' : '✕'}
            </button>
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
        </div>
    );
};

export default VNav;
