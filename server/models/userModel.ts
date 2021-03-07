import mongoose from 'mongoose';
import Meal from './mealModel';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  calorieGoal: Number,
  proteinGoal: Number,
  carbGoal: Number,
  fatGoal: Number,
  fiberGoal: Number,
  meals: [{
    Meal,
    date: { type: Date, default: Date.now() },
  }],
});

const User = mongoose.model('User', userSchema);

export default User;
