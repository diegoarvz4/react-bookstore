/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import uuid from 'uuid';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import CategoryFilter from '../CategoryFilterBox/CategoryFilter';
import { removeBook, changeFilter } from '../../actions/index';

const BooksContainer = styled.div`
height: 60vh;
overflow: scroll;
overflow-x: hidden;
margin-top: 30px;
  div {
    text-align: center;
    padding: 0 30px;
    select{
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px;
      font-size: 20px;
      font-family: Montserrat;
      width: 20%;
    }
    div {
      text-align: left;
    }
  }
`;


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
    <BooksContainer>
      <CategoryFilter filterChange={handleFilterChange} />
      <div className="booksContainer-list">
        {
          filter === 'All'
            ? books.map(book => <Book key={uuid()} {...book} removeBook={handleRemoveBook} />)
            : books.filter(book => book.category === filter).map(book => <Book key={uuid()} {...book} removeBook={handleRemoveBook} />)
        }
      </div>
    </BooksContainer>
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
