import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tracker from './components/Tracker/Tracker';
import './styles.css';
import Home from './components/Home/Home';
import Account from './components/Account/Account';

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path={['/', '/home']}>
          <Home />
        </Route>
        <Route path="/tracker">
          <Tracker />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
