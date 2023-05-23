import styled from 'styled-components';

export const StyledStatusSelect = styled.select`
  border-color: ${props => props.theme.foregroundColor};
  background-color: ${props => props.theme.backgroundColor};

  cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};
`;