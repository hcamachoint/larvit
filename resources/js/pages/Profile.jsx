import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        alert('Mensaje enviado (esto es una simulación)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page-container">
            <h2>Perfil</h2>
            <p>Esta es la pagina de perfil, donde podras encontrar toda tu infomacion personal.</p>
        </div>
    );
};

export default Contact;