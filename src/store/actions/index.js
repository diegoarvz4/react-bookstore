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

const changeFilter = (category) => (
  {
    type: actionTypes.changeFilter,
    category,
  }
);

export { addBook, removeBook, changeFilter };
