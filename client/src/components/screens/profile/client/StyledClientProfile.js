import styled, {css} from 'styled-components';

export const StyledClientProfile = styled.div`
  width: 100%;
  display: flex;

  .treaties-list-leftbar {
    width: calc(50% - 300px);
    height: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: #333333;
    border-right: 2px solid ${props => props.theme.header.borderColor};

    .leftbar-container {
      padding: 10px 0;
      width: 320px;
      display: flex;
      flex-direction: column;
      gap: 20px 0;
      color: #FFFFFF;
      
      .title-text-box {
        display: flex;
        align-items: center;
        position: relative;
        
        .create-treaty-btn {
          padding: 8px 10px 5px;
          border: none;
          position: absolute;
          right: 20px;
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          transition: color 0.4s ease;
          color: #999999;
          
          &:hover {
            color: #FFFFFF;
          }
        }
      }

      .treaty-title-text-box {

        p {
          padding: 5px 10px 5px 20px;
          cursor: pointer;

          &:hover, &.active {
            text-decoration: underline;
          }
        }
      }
    }
  }

.treaty-rightbar {
  width: calc(50% + 300px);
  display: flex;
  justify-content: flex-start;

  .rightbar-container {
    padding: 10px 0;
    width: 920px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .treaty {
    }
  }
}

`;