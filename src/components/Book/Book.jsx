import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../lib/colors';

const Book = (props) => {
  const BookContainer = styled.div`
    border-radius: 4px;
    border: solid 1px #e8e8e8;
    background-color: ${colors.lightblue};
    display: flex;
    align-items: center;
    position: relative;
    margin: 20px 0;
    width: 70vw;
  
    .bookContainer-id{
      font-weight: bold;      
      padding: 10px;
      padding-left: 0;
    }
  
    .bookContainer-bookName{
      padding: 10px;
      span{
        display: block;
      }
  
      .bookContainer-bookName__utilites{
        padding: 0;
        margin-top: 10px;
        font-size: 14px;
        display: flex;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${colors.greengray};
        span{
          cursor: pointer;
          display: inline;
          padding: 5px 10px;
          border-right: 1px solid rgba(128, 128, 128, 0.295);
          &:last-child{
            border-right: none;
          }
          &:first-child{
            padding-left: 0;
          }
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  
    .bookContainer-title{
      font-size: 22px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: ${colors.graybluedark};
    }
  
    .bookContainer-category{
      opacity: 0.5;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #121212;
    }
  
    .bookContainer-remove{
      position: absolute;
      right: 25px;
      width: 84px;
      height: 33px;
      border: 1px solid ${colors.grayblue};
      border-radius: 3px;
      background-color: ${colors.grayblue};
      font-size: 13px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.5px;
      text-align: center;
      color: #ffffff;
      margin-left: 100px;
    }
  }
  `;
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <BookContainer>
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
    </BookContainer>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
