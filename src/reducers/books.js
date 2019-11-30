import actionsMap from '../actions/index';

const actionTypes = {
  addBook: 'ADD_BOOK',
  removeBook: 'REMOVE_BOOK',
};

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.addBook:
      return actionsMap.addBook(state, action);
    case actionTypes.removeBook:
      return actionsMap.removeBook(state, action);
    default:
      return state;
  }
};

export default booksReducer;
