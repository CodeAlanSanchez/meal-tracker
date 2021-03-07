import express from 'express';

import {
  getUsers, createUser, deleteUser, updateUser,
} from '../controllers/user';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;
