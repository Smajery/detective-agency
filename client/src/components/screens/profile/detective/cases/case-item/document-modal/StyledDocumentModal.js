import styled from 'styled-components';

export const StyledDocumentModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(51, 51, 51, 0.5);
  z-index: 100000;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledForm = styled.form`
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  background-color: ${props => props.theme.backgroundColor};
  border: 1px solid #FFFFFF;
  
  .document-title {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  
  .selecting-type-container {
    display: flex;
    align-items: center;
    gap: 0 10px;
    
    p {
      font-weight: bold;
    }
  }

  .infoarea-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    .result-title {
      margin-bottom: 10px;
      font-weight: bold;
    }

    .result-infoarea {
      padding: 5px 10px;
      border-radius: 5px;
      resize: none;
      height: 110px;
    }

    .infoarea-label {
      margin-left: auto;
      font-size: 12px;
      font-weight: 300;

      .remaining-chars {
        margin-left: 5px;

        &.zero {
          color: #cf1d00;
        }
      }
    }
  }
  
  .selecting-files-container {
    display: flex;
    flex-direction: column;
    
    .files-title {
      margin-bottom: 10px;
      font-weight: bold;
    }
  }

  .error-text-box {
    width: 100%;

    .error-text {
      color: #cf1d00;
    }
  }
  
  button {
    margin-top: 10px;
    padding: 10px 0;
    border: none;
    background-color: #333333;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;