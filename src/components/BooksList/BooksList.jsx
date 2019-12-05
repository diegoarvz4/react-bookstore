/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import uuid from 'uuid';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import CategoryFilter from '../CategoryFilterBox/CategoryFilter';
import { removeBook, changeFilter } from '../../actions/index';

const BooksList = (
  {
    books,
    deleteBook,
    changeFilters,
    filter,
  },
) => {
  const handleRemoveBook = (id) => {
    deleteBook(id);
  };

  const handleFilterChange = (category) => {
    changeFilters(category);
  };
  return (
    <div>
      <CategoryFilter filterChange={handleFilterChange} />
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
            filter === 'All'
              ? books.map(book => <Book key={uuid()} {...book} removeBook={handleRemoveBook} />)
              : books.filter(book => book.category === filter).map(book => <Book key={uuid()} {...book} removeBook={handleRemoveBook} />)
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => (
  {
    books: state.books,
    filter: state.filter,
  }
);

const mapDispatchToProps = dispatch => (
  {
    deleteBook: id => dispatch(removeBook(id)),
    changeFilters: category => dispatch(changeFilter(category)),
  }
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilters: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
