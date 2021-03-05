import React from 'react';
import Bars from './Bars/Bars';
import Graph from './Graph/Graph';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => (
  <section className="tracker">
    <div className="grid-container">
      <Sidebar />
      <section className="data flex-container">
        <Bars />
        <Graph />
      </section>
    </div>
  </section>
);

export default Tracker;
