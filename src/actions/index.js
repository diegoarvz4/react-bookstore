export default {
  addBook: (state, action) => (
    {
      ...state,
      books: [...state.books, action.payload],
    }
  ),
  removeBook: (state, action) => (
    {
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
};
