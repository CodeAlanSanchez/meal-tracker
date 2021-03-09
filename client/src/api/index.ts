/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const mealUrl = 'http://localhost:5000/meals';
const userUrl = 'http://localhost:5000/users';

export const fetchMeals = () => axios.get(mealUrl);
export const createMeal = (meal: any) => axios.post(mealUrl, meal);
export const deleteMeal = () => axios.delete(mealUrl);
export const updateMeals = () => axios.patch(mealUrl);

export const fetchUsers = () => axios.get(userUrl);
export const createUser = () => axios.post(userUrl);
export const updateUsers = () => axios.patch(userUrl);
export const deleteUser = () => axios.delete(userUrl);
