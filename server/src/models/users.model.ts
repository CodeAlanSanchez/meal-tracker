import mongoose, { Schema, Document } from 'mongoose';
import { IMeal } from './meals.model';

export interface IUser extends Document {
  name: string;
  creationDate: Date;
  calorieGoal: number;
  proteinGoal: number;
  carbGoal: number;
  fatGoal: number;
  fiberGoal: number;
  meals: {
    meal: IMeal['_id'];
    date: Date;
  }[],
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  creationDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  calorieGoal: { type: Number, required: false },
  proteinGoal: { type: Number, required: false },
  carbGoal: { type: Number, required: false },
  fatGoal: { type: Number, required: false },
  fiberGoal: { type: Number, required: false },
  meals: [{
    meal: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, default: Date.now(), required: true },
    required: false,
  }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
