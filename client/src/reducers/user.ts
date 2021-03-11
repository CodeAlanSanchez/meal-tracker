/* eslint-disable import/prefer-default-export */
export const userReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload;
    default:
      return state;
  }
};
