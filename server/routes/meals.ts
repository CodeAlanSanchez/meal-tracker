import express from 'express';

import {
  getMeals, createMeal, deleteMeal, updateMeal,
} from '../controllers/meal';

const router = express.Router();

router.get('/', getMeals);
router.post('/', createMeal);
router.delete('/:id', deleteMeal);
router.patch('/:id', updateMeal);

export default router;
