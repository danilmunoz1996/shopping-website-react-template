import React from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a una API
    console.log('Formulario enviado');
  };

  return (
    <div className="newsletter-signup">
      <h2>Regístrate en nuestro boletín</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
