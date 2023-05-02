import styled from 'styled-components';

export const StyledSignupForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  .input-password-box {
    display: flex;
    align-items: center;
    position: relative;

    .password-security-btn {
      display: flex;
      align-items: center;
      position: absolute;
      right: 12px;
    }
  }

  .input-item {
    padding: 0 20px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 100px;
    background-color: #f3f3f3;
    color: #333333;

    &:hover {
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
    padding-left: 20px;
    display: flex;

    .text {
      color: #cf1d00;
    }
  }

  .signup-btn {
    margin-top: 12px;
    height: 40px;
    border: none;
    border-radius: 100px;
    background-color: ${props => props.theme.strongBackgroundColor};
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    text-transform: uppercase;

    &:hover {
      background-color: #444444;
    }
  }

`