/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { addBook } from '../../actions/index';
import genID from '../../lib/generateID';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      bookCategories: ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      id: genID(),
      title,
      category,
    };
    createBook(book);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { bookCategories, category, title } = this.state;
    return (
      <div className="bookForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={this.handleChange} className="inputTitle" name="title" placeholder="title" />
          <select name="category" value={category} onChange={this.handleChange}>
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(addBook(book)),
});


BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
