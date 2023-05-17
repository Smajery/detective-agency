import styled from 'styled-components';

export const StyledEmployeesSelect = styled.select`
  cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};
  background-color: #FFFFFF;
  border-color: #333333;
`