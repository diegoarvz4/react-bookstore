import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

export const preLoadedState = {
  books: [
  ],
};

export default combineReducers({
  books, filter,
});
