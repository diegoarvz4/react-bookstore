import actionTypes from '../actions/actionTypes';

const generateID = () => parseInt(Math.random() * 100, 10);

const initialState = [
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
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addBook:
      return [...state, action.book];
    case actionTypes.removeBook:
      return [...state.filter(book => book.id !== action.id)];
    default:
      return state;
  }
};

export default booksReducer;
