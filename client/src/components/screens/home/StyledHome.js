import styled from 'styled-components';

export const StyledHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .home-page-container {
    width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .about-text-container {
      margin-top: 20px;
      width: 900px;
      display: flex;
      flex-direction: column;
      
      h2 {
        margin: 0 auto;
      }
    }
  }
`;