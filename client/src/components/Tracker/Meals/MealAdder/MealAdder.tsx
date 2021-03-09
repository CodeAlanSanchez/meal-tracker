/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { createMeal } from '../../../../actions/meals.actions';

const MealAdder = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createMeal(e.target.value));
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
