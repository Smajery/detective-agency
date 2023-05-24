import styled from 'styled-components';

export const StyledDetectivesList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-bottom-width: 0; 
  
  .empty-list-title {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.foregroundColor};
    border-top-width: 0;
  }

  .detective-title-info {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.foregroundColor};
    border-bottom-width: 2px;

    .name-item {
      p {
        font-weight: bold;
      }
    }
  }
  
    .adding-employee-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 0 10px;
        background-color: ${props => props.theme.backgroundColor};
        color: ${(props) => (props.$isEdit ? 'inherit' : '#999999')};
        cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};
      }
    }
`;