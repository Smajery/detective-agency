import styled from 'styled-components';

export const StyledNavbar = styled.ul`
  display: flex;
  gap: 0 20px;

  .navbar-item {
    display: flex;
    align-items: center;
    position: relative;

    .logout-btn {
      border: none;
      transition: color .4s ease-in-out;

      &:hover {
        color: #FFFFFF;
      }
    }

    &.signout {
      margin-left: 30px;
    }

    &.dark-mode {
      margin: 0 15px;
    }

    &.language-box {
      display: flex;
      gap: 0 5px;
    }

    .navbar-a {
      padding: 20px 0;
    }

    &:hover > ul {
      display: flex;
    }
  }

`;