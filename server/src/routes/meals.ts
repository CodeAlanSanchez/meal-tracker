import express from 'express';

import {
  getMeals, getMeal, createMeal, deleteMeal, updateMeal,
} from '../controllers/meals.controller';

const router = express.Router();

router.get('/', getMeals);
router.get('/:id', getMeal);
router.post('/', createMeal);
router.delete('/:id', deleteMeal);
router.patch('/:id', updateMeal);

export default router;
