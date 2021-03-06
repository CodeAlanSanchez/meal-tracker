import React from 'react';
import Bars from './Bars/Bars';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => (
  <section className="tracker">
    <div className="grid-container">
      <Sidebar />
      <section className="data flex-container">
        <Bars />
      </section>
    </div>
  </section>
);

export default Tracker;
