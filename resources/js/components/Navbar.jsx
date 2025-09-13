import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1>Mi SPA</h1>
                <ul className="nav-links">
                    <li>
                        <Link 
                            to="/" 
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={location.pathname === '/contact' ? 'active' : ''}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;