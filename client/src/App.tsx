import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles.css';

const App = () => (
  <div>
    <Header />
    <Hero />
    <main>
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
