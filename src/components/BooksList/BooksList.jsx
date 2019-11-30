import React from 'react';
import { connect } from 'react-redux';
import Book from '../Book/Book';

const BooksList = (props) => {
  const { books } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => <Book key={book.id} id={book.id} title={book.title} category={book.category} />)
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books,
  };
};

export default connect(mapStateToProps)(BooksList);
