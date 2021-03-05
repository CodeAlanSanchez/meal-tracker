import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/Main/About/About';
import Contact from './components/Main/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Main/Hero/Hero';
import Tracker from './components/Tracker/Tracker';
import './styles.css';

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path={['/', '/home']}>
          <Hero />
          <About />
          <Contact />
        </Route>
        <Route path="/tracker">
          <Tracker />
        </Route>
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
