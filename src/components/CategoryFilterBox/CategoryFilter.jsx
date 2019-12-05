/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { changeFilter } from '../../actions/index';
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
  const handleChange = (event) => {
    const { changeFilters } = props;
    changeFilters(event.target.value);
  };


  return (
    <div className="categoryBox">
      <select name="CategoryFilter" onChange={handleChange}>
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
  }
);

const mapDispatchToProps = dispatch => (
  {
    changeFilters: category => dispatch(changeFilter(category)),
  }
);

CategoryFilter.propTypes = {
  books: PropTypes.array.isRequired,
  changeFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
