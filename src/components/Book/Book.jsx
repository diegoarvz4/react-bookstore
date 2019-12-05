import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <tr>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td><button type="button" onClick={() => removeBook(id)}>Remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
