import styled, {css} from 'styled-components';

export const StyledNavbarItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  ${(props) => {
    switch (props.$pathname) {
      case "/signin":
        return css`
          margin-left: 30px;
        `;
      default:
        return css`
          
        `;
    }
  }}
  

  .logout-btn {
    transition: color .4s ease-in-out;

    &:hover {
      color: #FFFFFF;
    }
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
`;