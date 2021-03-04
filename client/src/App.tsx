import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Tracker from './components/Tracker/Tracker';
import './styles.css';

const App = () => (
  <Switch>
    <Header />
    <Route exact path="/">
      <Hero />
      <main>
        <About />
        <Contact />
      </main>
    </Route>
    <Route path="/tracker">
      <Tracker />
    </Route>
    <Footer />
  </Switch>
);

export default App;
