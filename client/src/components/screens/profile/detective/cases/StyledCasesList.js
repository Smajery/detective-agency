import styled from 'styled-components';

export const StyledCasesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .case-title {
    padding: 0 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${props => props.theme.foregroundColor};

    p {
      font-weight: bold;
    }

    .number-item-title {
      width: 200px;
    }

    .date-item-title {
      width: 200px;
    }

    .status-item-title {
      width: 100px;
    }

  }

  .cases {
    display: flex;
    flex-direction: column;
  }

  .cases-empty-title {
    display: flex;
    justify-content: center;
  }
`