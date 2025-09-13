import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './app.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);