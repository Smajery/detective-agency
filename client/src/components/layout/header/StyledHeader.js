import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: #333333;
  color: #FFFFFF;

  .container {
    width: 1240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: #737373;
    transition: color .4s ease-in-out;

    &:hover, &.active {
      color: #FFFFFF;
    }

    &.active {
      text-decoration: underline;
    }
  }

`;

export const StyledLogo = styled.div`
  display: flex;

  p {
    font-weight: bold;

    span {
      display: block;
      text-align: right;
      font-weight: 300;
    }
  }
`;

export const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledNavbar = styled.ul`
  display: flex;
  gap: 0 20px;

  .navbar__item {
    display: flex;
    position: relative;

    a {
      padding: 20px 0;

      &:hover + ul {
        display: flex;
      }
    }
  }

  .navbar__item-login {
    margin-left: 30px;
  }
`;

export const StyledSubNavbar = styled.ul`
  padding-bottom: 5px;
  display: none;
  flex-direction: column;
  background-color: #333333;
  border-bottom-left-radius: 15px;
  position: absolute;
  top: 100%;
  
  &:hover {
    display: flex;
  }

  .subnavbar__item {
    min-width: 200px;
    
    a {
      padding: 7px 15px;
      width: 100%;
      display: block;
    }
  }
`;

