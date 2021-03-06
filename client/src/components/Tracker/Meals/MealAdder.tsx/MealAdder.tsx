/* eslint-disable react/prop-types */
import React from 'react';

const MealAdder = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="MealAdder meal">
      <form action="">
        <h3>Add Meal</h3>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="description" />
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default MealAdder;
