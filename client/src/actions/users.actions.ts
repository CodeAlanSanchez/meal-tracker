/* eslint-disable import/prefer-default-export */
import * as api from '../api';

export const getUsers = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: 'FETCH_USERS', payload: data });
  } catch (error) {
    console.error(error);
  }
};
