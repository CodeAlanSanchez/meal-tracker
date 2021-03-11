/* eslint-disable import/prefer-default-export */
import * as api from '../api';

export const getMeals = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchMeals();

    dispatch({ type: 'FETCH_MEALS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createMeal = (meal: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createMeal(meal);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.error(error);
  }
};
