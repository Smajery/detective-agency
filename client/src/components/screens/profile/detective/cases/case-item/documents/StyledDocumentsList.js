import styled from 'styled-components';

export const StyledDocumentsList = styled.div`
  display: flex;
  flex-direction: column;

  .document-info-title {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.foregroundColor};
    border-bottom-width: 2px;

    p {
      font-weight: bold;
    }

    .type-item-title {
      width: 80px;
    }

    .date-item-title {
      width: 157px;
    }
  }
  
  .documents-empty-title {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.foregroundColor};
    border-top-width: 0;
  }
  
  .adding-document-container {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    
    button {
      padding: 0 10px;
      background-color: ${props => props.theme.backgroundColor};
      cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};;
      color: ${(props) => (props.$isEdit ? 'inherit' : '#999999')};;
    }
  }
`;