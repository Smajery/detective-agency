import styled from 'styled-components';

export const StyledDetectiveItem = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333333;
  cursor: pointer;
  
  &:hover, &.active {
    background-color: #EBEBEB;
    border-bottom: 2px solid #333333;
  }
  
  .detective-title {
    display: flex;
  }
  
  .detective-content {
    display: flex;
    flex-direction: column;
  }
`;