/* eslint-disable react/prop-types */
import React from 'react';

const MealAdder = ({ setAdding }: {setAdding: any}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAdding(false);
  };
  return (
    <div className="MealAdder">
      <form action="">
        <h2>Add Meal</h2>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="description" />
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default MealAdder;
