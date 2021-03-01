/* eslint-disable import/prefer-default-export */
export const mealsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return [...state, action.payload];
    default:
      return state;
  }
};
