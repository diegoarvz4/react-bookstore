/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import uuid from 'uuid';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import { removeBook } from '../../actions/index';

const BooksList = ({ books, deleteBook }) => {
  const handleRemoveBook = (id) => {
    deleteBook(id);
  };
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
            books.map(book => <Book key={uuid()} {...book} removeBook={handleRemoveBook} />)
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => (
  {
    books: state.books,
  }
);

const mapDispatchToProps = dispatch => (
  {
    deleteBook: id => dispatch(removeBook(id)),
  }
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
