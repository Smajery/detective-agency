import styled from 'styled-components';

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
`;