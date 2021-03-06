/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Meal from '../Meal/Meal';
import MealAdder from '../MealAdder.tsx/MealAdder';

const MealList = ({ meals }: {meals: [{name: string, description: string}]}) => {
  const [adding, setAdding] = useState(false);

  const handleClick = () => {
    setAdding(true);
  };

  return (
    <section className="meal-list tracker-container">
      {!adding ? meals.map((meal: {name: string, description: string}) => <Meal meal={meal} />)
        : <MealAdder setAdding={setAdding} />}
      <button type="button" onClick={() => handleClick()}>Add Meal</button>
    </section>
  );
};

export default MealList;
