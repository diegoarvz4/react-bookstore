import actionTypes from '../actions/actionTypes';


export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.addBook:
      return [...state, action.book];
    case actionTypes.addBooks:
      return [...state, ...action.books];
    case actionTypes.removeBook:
      return [...state.filter(book => book.id !== action.id)];
    default:
      return state;
  }
};
