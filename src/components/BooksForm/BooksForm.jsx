/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import uuid from 'uuid';

export default () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="bookForm">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" placeholder="title" />
        <select name="" id="">
          {
            bookCategories.map(cat => (
              <option key={uuid()} value={cat}>{cat}</option>
            ))
          }
        </select>
        <button type="submit"> Submit </button>
      </form>

    </div>
  );
};
