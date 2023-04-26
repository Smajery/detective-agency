import styled from 'styled-components';

export const StyledLiftUpButton = styled.button`
  padding-bottom: 4px;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.color};
  border-radius: 50%;
  font-size: 25px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 1000;
`;