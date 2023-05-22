import styled from 'styled-components';

export const StyledDocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #333333;
  border-bottom-width: 0;

  .document-info-title {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #333333;

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
`;