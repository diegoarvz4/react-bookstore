import React from 'react';
import BookList from '../BooksList/BooksList';
import BookForm from '../BooksForm/BooksForm';

import './AppContainer.style.css';


const AppContainer = () => {
  return (
    <div className="AppContainer">

      <div className="TopMenu">
        <header>
          <h2 className="headerTitle">Bookstore CMS</h2>
          <a href="#">Books</a>
          <input type="text" placeholder="CATEGORIES"/>
          <span className="circle">
            <i class="fas fa-user"></i>
          </span>
          
        </header>
      </div>

      <div className="booksContainer">
        <BookList />
      </div>

      <div className="FootMenu">
        <BookForm />
      </div>
    </div>
  );
};

export default AppContainer;
