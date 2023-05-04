import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, title: 'Categoría 1', imageUrl: 'https://via.placeholder.com/200x200.png?text=Categor%C3%ADa+1' },
    { id: 2, title: 'Categoría 2', imageUrl: 'https://via.placeholder.com/200x200.png?text=Categor%C3%ADa+2' },
    { id: 3, title: 'Categoría 3', imageUrl: 'https://via.placeholder.com/200x200.png?text=Categor%C3%ADa+3' },
    // Agrega más categorías aquí
  ];

  return (
    <div className="categories">
      <h2>Categorías</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.imageUrl} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
