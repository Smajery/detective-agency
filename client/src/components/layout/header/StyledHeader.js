import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: #333333;
  border-bottom: 2px solid ${props => props.theme.header.borderColor};
  color: #999999;

  .container {
    width: 1240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 20px;
  }

  a {
    transition: color .4s ease-in-out;

    &:hover, &.active {
      color: #FFFFFF;
    }

    &.active {
      text-decoration: underline;
    }
  }

`;

export const StyledLogo = styled.div`
  display: flex;
  color: #FFFFFF;

  p {
    font-weight: bold;

    span {
      display: block;
      text-align: right;
      font-weight: 300;

      a {
        color: #999999
      }
    }
  }
`;

export const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

