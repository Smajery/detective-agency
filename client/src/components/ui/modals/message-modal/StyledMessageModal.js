import styled from 'styled-components';

export const StyledMessageModal = styled.div`
  padding: 20px 30px;
  min-width: 400px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.foregroundColor};
  color: ${props => props.theme.foreColor};
  border-radius: 15px 15px 0 0;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  transition: transform 0.5s ease-in-out;
  transform: translateY(100%);

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
`