import styled from 'styled-components';

export const StyledCaseItem = styled.div`
  padding: 0 20px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #333333;
  background-color: #FFFFFF;
  color: #333333;

  &:hover, &.active {
    background-color: #EBEBEB;
    border-bottom: 2px solid #333333;
  }

  .case-title-info {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    
    .number-item {
      width: 200px;
    }
    .date-item {
      width: 200px;
    }

    .status-item {
      width: 100px;
    }
  }
`