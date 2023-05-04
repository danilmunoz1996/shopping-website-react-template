import React from 'react';
import './Promotions.css';

const Promotions = () => {
  const promotions = [
    { id: 1, title: 'Promoción 1', imageUrl: 'https://via.placeholder.com/200x200.png?text=Promoci%C3%B3n+1', description: 'Descripción de la promoción 1' },
    { id: 2, title: 'Promoción 2', imageUrl: 'https://via.placeholder.com/200x200.png?text=Promoci%C3%B3n+2', description: 'Descripción de la promoción 2' },
    { id: 3, title: 'Promoción 3', imageUrl: 'https://via.placeholder.com/200x200.png?text=Promoci%C3%B3n+3', description: 'Descripción de la promoción 3' },
    // Agrega más promociones aquí
  ];

  return (
    <div className="promotions">
      <h2>Promociones</h2>
      <div className="promotions-grid">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="promotion-card">
            <img src={promotion.imageUrl} alt={promotion.title} />
            <h3>{promotion.title}</h3>
            <p>{promotion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
