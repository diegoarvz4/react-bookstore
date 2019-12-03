import actionTypes from '../actions/actionTypes';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.addBook:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case actionTypes.removeBook:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.id),
      };
    default:
      return state;
  }
};

export default booksReducer;
