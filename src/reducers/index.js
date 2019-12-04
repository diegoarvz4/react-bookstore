import { combineReducers } from 'redux';
import books from './books';

const generateID = () => parseInt(Math.random() * 100, 10);

export const initialState = {
  books: [
    {
      id: generateID(),
      title: 'The Catcher in the Rye',
      category: 'Realistic Fiction',
    },
    {
      id: generateID(),
      title: 'Lord of the Flies',
      category: 'Allegorical Novel',
    },
    {
      id: generateID(),
      title: 'Crime and Punishment',
      category: 'Philosofical Novel',
    },
  ],
};

export default combineReducers({
  books,
});
