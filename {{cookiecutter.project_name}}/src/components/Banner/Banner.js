import React from 'react';
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
        <div className="default-background"></div>
          <div className="banner-content">
            <h1>Producto estrella 1</h1>
            <p>Descripción breve</p>
            <button>Comprar ahora</button>
          </div>
        </div>
        <div>
        <div className="default-background"></div>
          <div className="banner-content">
            <h1>Producto estrella 2</h1>
            <p>Descripción breve</p>
            <button>Comprar ahora</button>
          </div>
        </div>
        <div>
        <div className="default-background"></div>
          <div className="banner-content">
            <h1>Producto estrella 3</h1>
            <p>Descripción breve</p>
            <button>Comprar ahora</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
