import mongoose, { Schema, Document } from 'mongoose';
import User from './user.model';

export interface IMeal extends Document {
  name: String;
  description: String;
  calories: Number;
  protein: Number;
  carbs: Number;
  fat: Number;
  fiber: Number;
  user: any;
}

const mealSchema: Schema = new Schema({
  name: String,
  description: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  user: User.schema,
});

const Meal = mongoose.model<IMeal>('Meal', mealSchema);

export default Meal;
