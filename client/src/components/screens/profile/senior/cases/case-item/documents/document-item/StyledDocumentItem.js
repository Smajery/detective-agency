import styled from 'styled-components';

export const StyledDocumentItem = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333333;
  gap: 10px 0;

  &:hover, &.active {
    background-color: #EBEBEB;
    border-bottom: 2px solid #333333;
  }

  .document-title {
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .type-item {
      width: 80px;
    }

    .date-item {
      width: 157px;
    }
  }
  
  .document-content {
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    
    .result-item {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      
      .result-title {
        display: flex;
        justify-content: space-between;
        
        button {
          padding: 0 10px;
          background-color: #FFFFFF;
        }
      }
      
      .result-content {
        padding: 5px 10px;
        display: flex;
        background-color: #FFFFFF;
        border: 1px solid #333333;
      }
    }
    
    .files-item {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      
      .files-title {
        display: flex;
        justify-content: space-between;

        button {
          padding: 0 10px;
          background-color: #FFFFFF;
        }
      }
      
      .files-content {
        display: flex;
        flex-direction: column;
        gap: 5px 0;
        
        .file {
          display: flex;
        }
      }
    }
  }
`;