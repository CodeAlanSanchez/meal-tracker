import React from 'react';
import { useSelector } from 'react-redux';
import Bars from './Bars/Bars';
import MealList from './Meals/MealList/MealList';
import Sidebar from './Sidebar/Sidebar';

const Tracker = () => {
  const meals = useSelector((state: {meals: object[]}) => state.meals);

  return (
    <section className="tracker">
      <div className="grid-container">
        <Sidebar />
        <Bars />
        {meals.length > 0 ? <MealList meals={meals} /> : <h1>Loading...</h1>}
      </div>
    </section>
  );
};

export default Tracker;
