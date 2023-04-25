import styled, {css} from 'styled-components';

export const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => {
    switch (props.$type) {
      case "page":
        return css`
          position: absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
        `;
      default:
        return css`
          
        `;
    }
  }}
`;

export const StyledRoller = styled.div`
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${(props) => {
    switch (props.$type) {
      case "page":
        return css`
          width: 130px;
          height: 130px;
          border: 13px dotted #333333;
        `;
      default:
        return css`
          width: 40px;
          height: 40px;
          border: 5px dotted #333333;
        `;
    }
  }}
`

export const StyledLoadingText = styled.p`
  color: #333333;

  &span:nth-child(1) {
    opacity: 1;
    animation: loading-dots 0.6s infinite alternate;
    animation-delay: 0s;
  }

  &span:nth-child(2) {
    opacity: 1;
    animation: loading-dots 0.6s infinite linear alternate;
    animation-delay: 0.3s;
  }

  &span:nth-child(3) {
    opacity: 1;
    animation: loading-dots 0.6s infinite alternate;
    animation-delay: 0.6s;
  }

  @keyframes loading-dots {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(props) => {
    switch (props.$type) {
      case "page":
        return css`
          margin-top: 20px;
          font-size: 30px;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`