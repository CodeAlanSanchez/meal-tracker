/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const url = 'http://localhost:5000/api';

export const fetchMeals = () => axios.get(url);
