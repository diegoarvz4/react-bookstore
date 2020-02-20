import actionTypes from './actionTypes';
import serviceURL from '../../apiEndPoint';

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
  fetch(`${serviceURL}/books`)
    .then(res => res.json())
    .then(res => dispatch(addBooks(res)))
));

const postBook = (book) => (dispatch => (
  fetch(`${serviceURL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then(res => res.json())
    .then(res => dispatch(addBook(res)))
    .catch(err => console.log(err.message))
));

const deleteBook = (id) => (dispatch => (
  fetch(`${serviceURL}/books/${id}`, {
    method: 'DELETE',
  })
    .then(() => dispatch(removeBook(id)))
    .catch(err => console.log(err.message))
));


export {
  addBook,
  removeBook,
  changeFilter,
  fetchBooks,
  postBook,
  deleteBook,
};
