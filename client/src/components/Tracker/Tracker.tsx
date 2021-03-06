import React from 'react';
import Bars from './Bars/Bars';
import MealList from './Meals/MealList/MealList';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => (
  <section className="tracker">
    <div className="grid-container">
      <Sidebar />
      <section className="data flex-container">
        <Bars />
      </section>
      <MealList meals={[{ name: 'henry', description: 'noble man' }]} />
    </div>
  </section>
);

export default Tracker;
