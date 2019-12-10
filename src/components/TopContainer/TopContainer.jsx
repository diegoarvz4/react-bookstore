import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/colors';

const TopMenu = styled.div`
height: 95px;
width: 100%;
border-radius: 20px 20px 0 0;
header {
  padding: 30px 100px;
  background-color: ${colors.grayblue};
  position: relative;
  border-radius: 20px 20px 0 0;
  h2 {      
    display: inline-block;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colors.graybluedark};
  }
  a {
    margin-left: 47px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.9px;
    color: ${colors.graybluedark};
  }
  input {
    margin-left: 41px;
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.9px;
  }
  span {
    position: absolute;
    right: 100px;
    bottom: 25%;
    width: 45px;
    height: 45px;
    padding: 5px;
    border: 0.5px solid ${colors.grayblue};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;      
    background-color: ${colors.graybluedark};
    color: ${colors.grayblue};
  }
}`;
const TopContainer = () => (
  <TopMenu>
    <header>
      <h2>Bookstore CMS</h2>
      <a href="localhots:3000">Books</a>
      <input type="text" placeholder="CATEGORIES" />
      <span>
        <i className="fas fa-user" />
      </span>
    </header>
  </TopMenu>
);

export default TopContainer;
