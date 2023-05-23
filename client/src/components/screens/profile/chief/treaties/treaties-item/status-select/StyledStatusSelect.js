import styled from 'styled-components';

export const StyledStatusSelect = styled.select`
  cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};
  background-color:${props => props.theme.backgroundColor};
  border-color: ${props => props.theme.foregroundColor};
`