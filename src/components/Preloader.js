import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <h1 className="brand-name"><i className="fas fa-fire"></i> Kavya-Resume-Builder</h1>
            <div className="spinner"></div>
            <div className="welcome-text">
                <h1>👋 Welcome to My Resume Builder webpage! 🚀</h1>
                <h3>Let's create something amazing together! 🌟</h3>
            </div>
        </div>
    );
};

export default Preloader;