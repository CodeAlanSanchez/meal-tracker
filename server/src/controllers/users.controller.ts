/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/users.model';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const newUser = new User(user);
  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');
    const deletedUser = await User.findByIdAndDelete(_id)
      .catch(() => res.status(400).send('Could not delete user'));

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');
    const updatedUser = await User.findByIdAndUpdate(_id, { ...user, _id }, { new: true });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(409).json({ error });
  }
};
