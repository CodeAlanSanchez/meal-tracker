import React from 'react';
import Bars from './Bars/Bars';
import MealList from './Meals/MealList/MealList';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => (
  <section className="tracker">
    <div className="grid-container">
      <Sidebar />
      <Bars />
      <MealList meals={[{ name: 'henry', description: 'noble man' }, { name: 'alex', description: 'education' }]} />
    </div>
  </section>
);

export default Tracker;
