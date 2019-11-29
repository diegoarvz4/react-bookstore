import actionsMap from '../actions/index';

const initialState = {};

const actionTypes = {
  addBook: 'ADD_BOOK',
  removeBook: 'REMOVE_BOOK',
};

const booksReducer = (state = initialState, action) => {
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
