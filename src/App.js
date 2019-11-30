/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';

import BooksList from './components/BooksList/BooksList';
// import BooksForm from './components/BooksForm/BooksForm'

function App() {
  return (
    <div className="App">
      <BooksList />
      {/*<BooksForm />*/}
    </div>
  );
}

export default App;
