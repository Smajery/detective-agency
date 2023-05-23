import styled from 'styled-components';

export const StyledDocumentItem = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.foregroundColor};
  border-top-width: 0;
  gap: 10px 0;

  &:hover, &.active {
    background-color: ${props => props.theme.hoverBackgroundColor};
    border-bottom: 2px solid ${props => props.theme.foregroundColor};
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
          background-color: ${props => props.theme.backgroundColor};
        }
      }
      
      .result-content {
        padding: 5px 10px;
        display: flex;
        background-color: ${props => props.theme.backgroundColor};
        border: 1px solid ${props => props.theme.foregroundColor};
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
          background-color: ${props => props.theme.backgroundColor};
        }
      }
      
      .files-content {
        display: flex;
        flex-direction: column;
        gap: 5px 0;
        
        .file {
          display: flex;
          
          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;