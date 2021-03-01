/* eslint-disable import/prefer-default-export */
import * as api from '../api';

export const getMeals = () => async (dispatch) => {
  try {
    const data = await api.fetchMeals();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(error);
  }
};
