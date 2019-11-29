const initialState = {};

const actionTypes = {
  addBook: 'ADD_BOOK',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addBook:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default booksReducer;
