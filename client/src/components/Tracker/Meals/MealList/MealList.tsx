/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Meal from '../Meal/Meal';
import MealAdder from '../MealAdder/MealAdder';

const MealList = ({ meals }: any) => (
  <section className="meal-list tracker-container">
    {meals ? meals.map((meal: any) => <Meal key={meal._id} meal={meal} />) : <h1>Loading...</h1>}
    <MealAdder />
  </section>
);

export default MealList;
