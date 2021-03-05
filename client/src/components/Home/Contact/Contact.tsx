import React from 'react';

const Contact = () => (
  <section className="contact">
    <div className="flex-container">
      <h1>Contact Us</h1>
      <form action="" className="grid-container">
        <input className="first" type="text" placeholder="First Name" />
        <input className="last" type="text" placeholder="Last Name" />
        <input className="email" type="text" placeholder="Email" />
        <input className="subject" type="text" placeholder="Subject" />
        <textarea className="content" placeholder="Content" />
      </form>
    </div>
  </section>
);

export default Contact;
