/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import Meal from '../models/meal.model';

const mongoose = require('mongoose');

export const getMeals = async (req: Request, res: Response) => {
  try {
    const meals = await Meal.find();

    res.status(200).json(meals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMeal = async (req: Request, res: Response) => {
  const meal = req.body;

  const newMeal = new Meal(meal);

  try {
    await newMeal.save();

    res.status(201).json(newMeal);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const deleteMeal = async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No meal with that id');
    const deletedMeal = await Meal.findByIdAndDelete(_id)
      .catch(() => res.status(400).send('Could not delete meal'));

    res.status(200).json(deletedMeal);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;
    const meal = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No meal with that id');
    const updatedMeal = await Meal.findByIdAndUpdate(_id, { ...meal, _id }, { new: true });

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(409).json({ error });
  }
};
