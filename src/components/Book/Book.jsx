import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Book.style.css';


const Book = (props) => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <div className="bookContainer">
      <span className="bookContainer-id">{ id }</span>
      <div className="bookContainer-bookName">
        <span className="bookContainer-category">{ category }</span>
        <h2 className="bookContainer-title">{ title }</h2>
        <div className="bookContainer-bookName__utilites">
          <span>Comments</span>
          <span>Edit</span>
        </div>
      </div>
      <button className="bookContainer-remove" type="button" onClick={() => removeBook(id)}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
