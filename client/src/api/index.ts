/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const mealUrl = 'http://localhost:5000/meals';
const userUrl = 'http://localhost:5000/users';

export const fetchMeals = () => axios.get(mealUrl);
export const createMeal = (meal: any) => axios.post(mealUrl, meal);
export const deleteMeal = () => axios.delete(mealUrl);
export const updateMeal = () => axios.patch(mealUrl);

export const fetchUser = (id: string) => axios.get(`${userUrl}/${id}`);
export const createUser = () => axios.post(userUrl);
export const updateUser = () => axios.patch(userUrl);
export const deleteUser = () => axios.delete(userUrl);
