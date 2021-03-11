import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {
  const loggedIn = useSelector((state: any) => state.user);

  return (
    <section className="hero">
      <div className="flex-container">
        <div className="heading">
          <h1>Easier than ever</h1>
          <p>
            Track your eating like you&#39;ve
            never done before.
          </p>
          <Link to={!loggedIn ? '/tracker' : '/register'}>
            <button type="button">Get Started</button>
          </Link>
        </div>
        <img src="./img/iPhone6.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
