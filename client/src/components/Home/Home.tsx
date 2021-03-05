import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';

const Home = () => (
  <section className="home">
    <Hero />
    <About />
    <Contact />
  </section>
);

export default Home;
