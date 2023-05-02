import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 20px 0;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #333333;
  border-top: 2px solid ${props => props.theme.footer.borderColor};
  color: #999999;

  .container {
    width: 1240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledCopyright = styled.div`
  display: flex;
  justify-content: center;
`;