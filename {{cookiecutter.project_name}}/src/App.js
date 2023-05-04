import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import TrendingProducts from './components/TrendingProducts/TrendingProducts';
import Promotions from './components/Promotions/Promotions';
import NewsletterSignup from './components/NewsletterSignup/NewsletterSignup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <TrendingProducts />
      <Promotions />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;