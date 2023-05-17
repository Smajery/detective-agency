import styled from 'styled-components';

export const StyledConfirmModal = styled.div`
  padding: 20px 30px;
  min-width: 400px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
  background-color: ${props => props.theme.foregroundColor};
  color: ${props => props.theme.foreColor};
  border-radius: 0 0 15px 15px;
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-100%);

  &.active {
    transform: translateY(0%);
  }

  .close-btn {
    border: none;
    position: absolute;
    top: 3px;
    right: 10px;
    transition: color .4s ease-in-out;
    color: ${props => props.theme.defaultColor};

    &:hover {
      color: #cf1d00;
    }
  }
  
  .confirm-btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    button {
      border: none;
      padding: 5px 10px;
    }
    
    .confirm-btn {
      &:hover {
        color: #00b300;
      }
    }
    
    .cancel-btn {
      &:hover {
        color: #ff5733;
      }
    }
  }
`;