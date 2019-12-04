/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions/index';
import uuid from 'uuid';
import genID from '../../lib/generateID';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      bookCategories: ['','Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    };
  }

  handleChange = (event) => {
    const currentCategory = event.target.value;
    if (event.target.id === 'category') {
      this.setState({
        category: currentCategory,
      });
    } else 
    if (event.target.id === 'title') {
      this.setState({
        title: currentCategory,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = this.state;
    const book = {
      id: genID(),
      title,
      category
    }
    this.props.addBook(book);
    this.setState({
      title: '',
      category: ''
    })
  }

  render() {
    const { bookCategories, category, title } = this.state;
    return (
      <div className="bookForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={this.handleChange} className="inputTitle" id="title" name="title" placeholder="title" />
          <select name="" id="category" value={category} onChange={this.handleChange}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(addBook(book)),
  }
}

export default connect(null, mapDispatchToProps)(BookForm);
