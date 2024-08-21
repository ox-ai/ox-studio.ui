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

            <a href="#server-setting" className="nav-link">server-setting</a>
            <a href="#server-api" className="nav-link">server api</a>
            <a href="#ox-engine" className="nav-link">ox-engine</a>
            <a href="#llm-server" className="nav-link">llm-server</a>
        </div>
    );
};

export default VNav;
