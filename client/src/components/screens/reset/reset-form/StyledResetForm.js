import styled from 'styled-components';

export const StyledResetForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px 0;
  
  .email-input {
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
  }
  
  .reset-btn {
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
`;