import React from 'react';
import styled from 'styled-components';
import BookList from '../BooksList/BooksList';
import BookForm from '../BooksForm/BooksForm';
import TopContainer from '../TopContainer/TopContainer';

const BookContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 10px 10px 40px -9px rgba(0,0,0,0.75);
border-radius: 20px;
hr {
  border: none;
  border-bottom: 1px solid lightgray;
  width: 90%;
  marginbottom: 40px;
}
`;

const AppContainer = () => (
  <BookContainer>
    <TopContainer />
    <BookList />
    <hr />
    <BookForm />
  </BookContainer>
);

export default AppContainer;
