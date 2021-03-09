import React from 'react';
import Bars from './Bars/Bars';
import MealList from './Meals/MealList/MealList';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => (
  <section className="tracker">
    <div className="grid-container">
      <Sidebar />
      <Bars />
      <MealList meals={[{ name: 'henry', description: 'noble man', _id: 1 }, { name: 'alex', description: 'education', _id: 2 }]} />
    </div>
  </section>
);

export default Tracker;
