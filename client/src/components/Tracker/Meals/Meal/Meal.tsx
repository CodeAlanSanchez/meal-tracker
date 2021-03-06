/* eslint-disable react/prop-types */
import React from 'react';

const Meal = ({ meal }: {meal: {name: string, description: string}}) => (
  <div className="meal">
    <h2>{meal.name}</h2>
    <p>{meal.description}</p>
    <button type="submit">Add</button>
  </div>
);

export default Meal;
