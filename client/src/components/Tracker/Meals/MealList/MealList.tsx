/* eslint-disable react/prop-types */
import React from 'react';
import Meal from '../Meal/Meal';
import MealAdder from '../MealAdder.tsx/MealAdder';

const MealList = ({ meals }: {meals: {name: string, description: string}[]}) => (
  <section className="meal-list tracker-container">
    {meals.map((meal: {name: string, description: string}) => <Meal meal={meal} />)}
    <MealAdder />
  </section>
);

export default MealList;
