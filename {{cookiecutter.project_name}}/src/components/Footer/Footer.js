import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <button className="footer-link">Sobre nosotros</button>
        <button className="footer-link">Política de privacidad</button>
        <button className="footer-link">Términos y condiciones</button>
      </div>
      <div className="footer-social">
        <button className="footer-social-link">Facebook</button>
        <button className="footer-social-link">Twitter</button>
        <button className="footer-social-link">Instagram</button>
      </div>
      <p className="footer-contact">
        Contacto: contacto@example.com
      </p>
    </footer>
  );
};

export default Footer;