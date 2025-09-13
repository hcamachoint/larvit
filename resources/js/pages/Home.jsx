import React from 'react';

const Home = () => {
    return (
        <div className="page-container">
            <h2>Bienvenido a la página de inicio</h2>
            <p>Esta es una SPA construida con Laravel, React y Vite.</p>
            <div className="feature-list">
                <div className="feature">
                    <h3>Rápido</h3>
                    <p>Gracias a Vite, el desarrollo es extremadamente rápido.</p>
                </div>
                <div className="feature">
                    <h3>Moderno</h3>
                    <p>Utiliza las últimas tecnologías del ecosistema React.</p>
                </div>
                <div className="feature">
                    <h3>Eficiente</h3>
                    <p>Laravel proporciona una robusta backend API.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;