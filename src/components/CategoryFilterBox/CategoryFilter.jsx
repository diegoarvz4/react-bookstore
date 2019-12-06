/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const categoryArray = () => {
    const { books } = props;
    const map = [];

    books.map(book => {
      if (!map.includes(book.category)) {
        map.push(book.category);
      }
    });
    return map;
  };

  const filterChangeHandler = (event) => {
    const { filterChange } = props;
    filterChange(event.target.value);
  };

  const { filter } = props;

  return (
    <div className="categoryBox">
      <select name="CategoryFilter" value={filter} onChange={filterChangeHandler}>
        <option key={uuid()} value="All">All</option>
        {
          categoryArray().map(category => (
            <option key={uuid()} value={category}>{category}</option>
          ))
        }
      </select>
    </div>
  );
};

const mapStateToProps = state => (
  {
    books: state.books,
    filter: state.filter,
  }
);

CategoryFilter.propTypes = {
  books: PropTypes.array.isRequired,
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
