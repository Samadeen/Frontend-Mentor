import React from 'react';
import Header from '../layout/Header/Header';
import Hero from '../components/Hero/Hero';
import Advance from '../components/Advance/Advance';
import Footer from '../layout/Footer/Footer';
import { motion as m } from 'framer-motion';

const Home = () => {
  return (
    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
      <Header />
      <Hero />
      <Advance />
      <Footer />
    </m.div>
  );
};

export default Home;
