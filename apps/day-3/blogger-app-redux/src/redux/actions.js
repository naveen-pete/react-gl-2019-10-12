import { GET_CATEGORIES } from './constants';

import { categories } from '../store';

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: categories
  }
};
