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

const addBooks = (books) => (
  {
    type: actionTypes.addBooks,
    books,
  }
);

const fetchBooks = () => (dispatch => (
  fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(res => dispatch(addBooks(res)))
));

const postBook = (book) => (dispatch => (
  fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(book),
  })
    .then(res => res.json())
    .then(res => dispatch(addBook(res)))
    .catch(err => console.log(err.message))
));


export {
  addBook,
  removeBook,
  changeFilter,
  fetchBooks,
  postBook,
};
