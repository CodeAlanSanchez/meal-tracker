import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

export interface IMeal extends Document {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  user: IUser['_id'];
}

const mealSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  calories: { type: Number, required: false },
  protein: { type: Number, required: false },
  carbs: { type: Number, required: false },
  fat: { type: Number, required: false },
  fiber: { type: Number, required: false },
  user: { type: Schema.Types.ObjectId, required: true },
});

const Meal = mongoose.model<IMeal>('Meal', mealSchema);

export default Meal;
