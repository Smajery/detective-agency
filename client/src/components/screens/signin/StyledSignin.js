import styled from 'styled-components';

export const StyledSignin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .container {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px 0;

    .redirect-container {
      display: flex;
      justify-content: flex-end;

      a {
        color: #999999;

        &:hover {
          color: #333333;
          text-decoration: underline;
        }
      }
    }

    .title-container {
      display: flex;
      justify-content: center;

      .title {
        font-size: 25px;
        font-weight: 700;
      }
    }

    .decor-text-container {
      display: flex;
      justify-content: center;
      position: relative;

      .decor-text-box {
        z-index: 0;

        &::before {
          content: "";
          margin-top: -1px;
          border-top: 1px solid #E3DEE1;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          z-index: -1;
        }

        .text {
          padding: 0 28px;
          background-color: #FFFFFF;
          font-size: 20px;
          font-weight: bold;
          text-transform: lowercase;
          z-index: 1;
        }
      }
    }

    .login-container {
      display: flex;
    }

    .ask-signup-container {
      display: flex;
      justify-content: center;

      .text {
        color: #999999;
        span {
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          
          &:hover {
            color: #333333;
          }
        }
      }
    }
  }
`