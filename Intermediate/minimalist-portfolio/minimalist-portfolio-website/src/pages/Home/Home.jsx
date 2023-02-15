import React from 'react';
import Layout from '../../layouts/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Interested from '../../components/Interested/Interested';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Interested />
    </div>
  );
};

export default Home;
