/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { mealsReducer } from './meals';
import { userReducer } from './user';

const rootReducer = combineReducers({
  meals: mealsReducer,
  user: userReducer,
});

export default rootReducer;
