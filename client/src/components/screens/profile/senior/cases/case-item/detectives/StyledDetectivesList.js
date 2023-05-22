import styled from 'styled-components';

export const StyledDetectivesList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #333333;
  border-bottom-width: 0;

  .detective-title-info {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #333333;

    .name-item {
      p {
        font-weight: bold;
      }
    }
  }
`;