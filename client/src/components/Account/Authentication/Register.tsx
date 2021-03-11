/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
        <h2>Register</h2>
        <form action="submit" onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
          <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => handleChange(e)} />
          <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => handleChange(e)} />
          <button type="submit">Register</button>
        </form>
        <Link to="/tracker">
          <button type="button">Continue as Guest</button>
        </Link>
        <Link to="/login">
          <p className="link">Already registered?</p>
        </Link>
      </div>
    </section>
  );
};

export default Register;
