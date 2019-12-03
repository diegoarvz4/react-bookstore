import actionTypes from './actionTypes';

const addBook = (book) => (
  {
    type: actionTypes.addBook,
    book,
  }
);

const removeBook = (id) => (
  {
    type: actionTypes.removeBook,
    id,
  }
);

export { addBook, removeBook };
