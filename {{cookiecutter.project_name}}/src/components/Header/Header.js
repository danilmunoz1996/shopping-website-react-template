import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <div className="header-search">
        <input type="text" placeholder="Buscar productos..." />
      </div>
      <div className="header-icons">
        <div className="header-icon">Carrito</div>
        <div className="header-icon">Perfil</div>
      </div>
      <nav className="header-nav">
        <ul>
          <li><button className="header-nav-button">Inicio</button></li>
          <li><button className="header-nav-button">Productos</button></li>
          <li><button className="header-nav-button">Contacto</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
