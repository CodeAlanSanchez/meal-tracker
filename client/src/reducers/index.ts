/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { mealsReducer } from './meals';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export default rootReducer;
