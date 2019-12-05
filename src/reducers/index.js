import { combineReducers } from 'redux';
import books from './books';
import genID from '../lib/generateID';

export const initialState = {
  books: [
    {
      id: genID(),
      title: 'The Catcher in the Rye',
      category: 'Realistic Fiction',
    },
    {
      id: genID(),
      title: 'Lord of the Flies',
      category: 'Allegorical Novel',
    },
    {
      id: genID(),
      title: 'Crime and Punishment',
      category: 'Philosofical Novel',
    },
  ],
};

export default combineReducers({
  books,
});
