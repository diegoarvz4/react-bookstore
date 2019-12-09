/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styled from 'styled-components';
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
    const componentHeight = '50px';
    const BookForm = styled.div`
      width: 90%;
      margin: 0 auto;
      margin-bottom: 100px;
      form {
        label {
          width: 174px;
          height: 24px;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.18px;
          color: #888888;
          display: block;
          margin-bottom: 20px;
        }
      }

      .form-components {
        display: flex;
        flex-wrap: no-wrap;
        justify-content: space-between;
        input, select, button {
          border: 1px solid lightgray;
          border-radius: 5px;
          padding: 10px;
          font-size: 20px;
          font-family: Montserrat;
        }
        input {
          width: 60%;
        }
        select {
          width: 20%;
        }
        button {
          width: 10%;
        }
      }
    `;
    return (
      <BookForm>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Add New Book</label>
          <div className="form-components">
            <input type="text" value={title} onChange={this.handleChange} className="inputTitle" name="title" placeholder="title" />
            <select name="category" value={category} onChange={this.handleChange}>
              {
                bookCategories.map(cat => (
                  <option key={uuid()} value={cat}>{cat}</option>
                ))
              }
            </select>
            <button type="submit"> Submit </button>
          </div>
        </form>
      </BookForm>
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
