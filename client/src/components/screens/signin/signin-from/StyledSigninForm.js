import styled from 'styled-components';

export const StyledSigninForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  .input-item {
    padding: 0 20px;
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

  .signin-btn {
    margin-top: 12px;
    height: 40px;
    border: none;
    border-radius: 100px;
    background-color: #333333;
    font-weight: bold;
    color: #FFFFFF;
    text-transform: uppercase;

    &:hover {
      background-color: #444444;
    }
  }

  .signin-options {
    display: flex;
    justify-content: space-between;

    .keep-log-text {
      display: flex;
      align-items: center;
      color: #999999;
      
      &.active {
        color: #333333;
        text-decoration: underline;
      }

      input[type='checkbox'] {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }

    .forgot-pass-text {
      color: #999999;
      &:hover {
        color: #333333;
        text-decoration: underline;
      }
    }
  }
`