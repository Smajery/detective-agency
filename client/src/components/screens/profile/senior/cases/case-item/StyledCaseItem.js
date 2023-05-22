import styled, {css} from 'styled-components';

export const StyledCaseItem = styled.form`
  padding: 0 20px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #333333;
  background-color: #FFFFFF;
  color: #333333;

  &:hover, &.active {
    background-color: #EBEBEB;
    border-bottom: 2px solid #333333;
  }

  .case-title-info {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;


    .number-item {
      width: 200px;
    }

    .date-item {
      width: 200px;
    }

    .status-item {
      width: 100px;
      ${(props) => {
        switch (props.$status) {
          case 'в процесі':
            return css`
              color: #ff8c00
            `;
          case 'виконано':
            return css`
              color: #0000ff
            `;
          case 'скасовано':
            return css`
              color: #cf1d00
            `;
          default:
            return css`
              color: inherit;
            `;
        }
      }}
    }
  }

  .case-content {
    padding: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    .left-side {
      width: 370px;
      display: flex;
      flex-direction: column;
      gap: 20px 0;

      .treaty-info {
        display: flex;
        flex-direction: column;
        gap: 20px 0;

        .treaty-info-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0 10px;

          p {
            font-weight: bold;
          }

          button {
            padding: 0 10px;
            background-color: #FFFFFF;
          }
        }

        .treaty-info-content {
          display: flex;
          flex-direction: column;
          gap: 10px 0;

          .client-info {
            display: flex;
            flex-direction: column;
            gap: 10px 0;

            .client-info-title {
              display: flex;
            }

            .client-info {
              padding: 5px 10px;
              width: 100%;
              display: flex;
              border: 1px solid #333333;
              background-color: #FFFFFF;
            }
          }
        }
      }
      
      .case-status {
        display: flex;
        align-items: center;
        gap: 0 10px;
        
        p{
          font-weight: bold;
        }
      }
    }
    
    .right-side {
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 20px 0;
      
      .documents-info {
        display: flex;
        flex-direction: column;
        gap: 20px 0;

        .documents-info-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0 10px;

          p {
            font-weight: bold;
          }

          button {
            padding: 0 10px;
            background-color: #FFFFFF;
          }
        }
      }
      
      .detectives-info {
        display: flex;
        flex-direction: column;
        
        .detectives-info-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          p {
            font-weight: bold;
          }
          button {
            padding: 0 10px;
            background-color: #FFFFFF;
          }
        }
      }
    }
  }
`;