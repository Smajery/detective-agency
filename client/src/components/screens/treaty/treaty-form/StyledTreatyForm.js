import styled from 'styled-components';

export const StyledTreatyForm = styled.form`
  margin-top: 60px;
  padding: 20px;
  width: 560px;
  background-color: #FFFFFF;
  color: #333333;
  border: 1px solid #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
  
  .treaty-title-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
  }
  
  .infoarea-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    .client-infoarea {
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
  
  .select-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px 0;
  }
  
  .submit-btn {
    margin-top: 10px;
    padding: 10px 0;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #333333;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  
  .agree-box {
    margin-top: 5px;
    width: 100%;
    
    .agree-text {
      margin-left: 5px;
    }
  }

  .treaty-expl-text-box {
    width: 100%;

    .exp-text {
      font-size: 14px;

      .ps-text {
        font-weight: bold;
      }
    }
  }

  .treaty-pd-text-box {
    width: 100%;

    .pd-text {
      color: #999999;
      font-size: 12px;
      
      .privacy-text {
        margin-top: 10px;
        font-style: italic;
      }
    }
  }
  
  .error-text-box {
    width: 100%;
    
    .error-text {
      color: #cf1d00;
    }
  }
  
`