import styled from 'styled-components';

export const StyledDetectiveItem = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.foregroundColor};
  border-top-width: 0;
  cursor: pointer;
  
  &:hover, &.active {
    background-color: ${props => props.theme.hoverBackgroundColor};
    border-bottom: 2px solid ${props => props.theme.foregroundColor};
  }
  
  .detective-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .delete-btn {
      padding: 0 10px;
      color: ${(props) => (props.$isEdit ? 'inherit' : '#999999')};
      cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};
    }
  }
  
  .detective-content {
    display: flex;
    flex-direction: column;
  }
`;