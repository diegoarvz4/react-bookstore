import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import genID from '../../lib/generateID';

export const preLoadedState = {
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
    {
      id: genID(),
      title: 'El Laberinto de la Soledad',
      category: 'Novel',
    },
  ],
};

export default combineReducers({
  books, filter,
});
