import styled from 'styled-components';

export const StyledReset = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    
    .title {
      display: flex;
      flex-direction: column;
      gap: 12px 0;
      text-align: center;
    }
    
    .return-text-box {
      display: flex;
      justify-content: center;
      color: #999999;
      text-transform: lowercase;
      
      a {
        text-decoration: underline;

        &:hover {
          color: ${props => props.theme.color};
        }
      }
    }
  }
`;