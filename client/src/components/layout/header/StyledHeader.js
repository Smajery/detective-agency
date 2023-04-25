import styled from 'styled-components';

export const StyledHeader = styled.header`
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
`

export const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledNavbar = styled.ul`
  display: flex;
  gap: 0 20px;
  
  li {
    display: flex;

    a {
      padding: 20px 0;
    }
  }
`

