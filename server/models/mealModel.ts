import mongoose from 'mongoose';
import User from './userModel';

const { Schema } = mongoose;

const mealSchema = new Schema({
  name: String,
  description: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  user: User,
});

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;
