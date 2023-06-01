import styled from 'styled-components';

export const StyledService = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  
  .container {
    width: 1240px;
    display: flex;
    
    .service-container {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      
      .additional-text {
        font-style: italic;
      }
    }
  }
`