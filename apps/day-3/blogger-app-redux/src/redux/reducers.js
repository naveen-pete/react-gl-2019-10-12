import { combineReducers } from 'redux';

import { GET_CATEGORIES, GET_POSTS } from './constants';

const categories = (state = [], action) => {
  // if(action.type === GET_CATEGORIES) {
  //   // do something
  // }

  switch (action.type) {
    case GET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

const posts = (state = [1, 2, 3], action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];

    default:
      return state;
  }
};

const appReducers = combineReducers({
  categories,
  posts
});

export default appReducers;
