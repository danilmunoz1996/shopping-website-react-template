import React from 'react';
import './TrendingProducts.css';

const TrendingProducts = () => {
  const products = [
    { id: 1, title: 'Producto 1', imageUrl: 'https://via.placeholder.com/200x200.png?text=Producto+1', price: '$20.00' },
    { id: 2, title: 'Producto 2', imageUrl: 'https://via.placeholder.com/200x200.png?text=Producto+2', price: '$30.00' },
    { id: 3, title: 'Producto 3', imageUrl: 'https://via.placeholder.com/200x200.png?text=Producto+3', price: '$40.00' },
    // Agrega más productos aquí
  ];

  return (
    <div className="trending-products">
      <h2>Productos de tendencia</h2>
      <div className="trending-products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
