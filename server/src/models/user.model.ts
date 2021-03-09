import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: String;
  creationDate: Date;
  calorieGoal: Number;
  proteinGoal: Number;
  carbGoal: Number;
  fatGoal: Number;
  fiberGoal: Number;
  meals: {
    id: Number,
    date: Date,
  }[],
}

const userSchema: Schema = new Schema({
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
    id: Number,
    date: { type: Date, default: Date.now() },
  }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
