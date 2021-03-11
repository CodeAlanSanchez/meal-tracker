/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setUsername('');
    setPassword('');
  };

  const handleChange = (e: any) => {
    e.target.id === 'username' ? setUsername(e.target.value) : setPassword(e.target.value);
  };

  return (
    <section id="register" className="register">
      <div className="flex-container">
        <h2>Log in</h2>
        <form action="submit" onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
          <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => handleChange(e)} />
          <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => handleChange(e)} />
          <button type="submit">Log in</button>
        </form>
        <Link to="/register">
          <p className="link">Don&apos;t have an account?</p>
        </Link>
      </div>
    </section>
  );
};

export default LogIn;
