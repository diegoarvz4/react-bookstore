/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import uuid from 'uuid';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
            books.map(book => <Book key={uuid()} id={book.id} title={book.title} category={book.category} />)
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => (
  {
    books: state.booksReducer.books,
  }
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(BooksList);
