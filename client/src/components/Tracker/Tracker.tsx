import React from 'react';
import Bars from './Bars/Bars';
import Graph from './Graph/Graph';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => (
  <section className="tracker">
    <div className="grid-container">
      <Sidebar />
      <div className="flex-container">
        <Bars />
        <Graph />
      </div>
    </div>
  </section>
);

export default Tracker;
