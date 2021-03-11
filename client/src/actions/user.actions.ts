/* eslint-disable import/prefer-default-export */
import * as api from '../api';

export const getUser = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchUser('1');

    dispatch({ type: 'FETCH_USER', payload: data });
  } catch (error) {
    console.error(error);
  }
};
