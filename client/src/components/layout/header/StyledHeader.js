import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  background-color: black;

  a {
    padding: 20px 0;
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

