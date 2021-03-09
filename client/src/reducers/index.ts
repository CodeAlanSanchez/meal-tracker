/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { mealsReducer } from './meals';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  meals: mealsReducer,
  users: usersReducer,
});

export default rootReducer;
