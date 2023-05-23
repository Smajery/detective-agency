import styled from 'styled-components';

export const StyledSigninForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px 0;
  
  .input-password-box {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    
    .password-security-btn {
      border: none;
      display: flex;
      align-items: center;
      position: absolute;
      right: 12px;
    }
  }

  .input-item {
    padding: 0 40px 0 20px;
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: #f3f3f3;
    color: #333333;

    &:hover, &:focus {
      background-color: #EBEBEB;

    }

    &::-webkit-input-placeholder {
      color: #B8B8B8;
    }

    &.input-item_error {
      outline: #cf1d00;
      border: 2px solid #cf1d00;
    }
  }

  .error-text-container {
    width: 100%;
    padding-left: 20px;
    display: flex;

    .text {
      color: #cf1d00;
    }
  }

  .signin-btn {
    width: 100%;
    margin-top: 12px;
    height: 40px;
    border: none;
    border-radius: 100px;
    background-color: ${props => props.theme.strongBackgroundColor};
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    text-transform: uppercase;

    &:hover {
      background-color: #444444;
    }
  }

  .signin-options {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .keep-log-text {
      display: flex;
      align-items: center;
      color: #999999;
      
      &.active {
        color: ${props => props.theme.color};
        text-decoration: underline;
      }

      input[type='checkbox'] {
        margin-right: 5px;
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }

    .forgot-pass-text {
      color: #999999;
      &:hover {
        color: ${props => props.theme.color};
        text-decoration: underline;
      }
    }
  }

  .ask-signup-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .text {
      color: #999999;
      span {
        margin-left: 5px;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          color: ${props => props.theme.color};;
        }
      }
    }
  }
`