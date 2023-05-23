import styled, {css} from 'styled-components';

export const StyledTreatiesItem = styled.form`
  padding: 0 20px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.foregroundColor};
  background-color: ${props => props.theme.backgroundColor};

  &:hover, &.active {
    background-color: ${props => props.theme.hoverBackgroundColor};
    border-bottom: 2px solid ${props => props.theme.foregroundColor};
  }

  .treaty-title-info {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .service-item {
      width: 200px;
    }

    .place-item {
      width: 130px;
    }

    .date-item {
      width: 200px;
    }

    .status-item {
      width: 100px;
    }

    .status-item {
      ${(props) => {
        switch (props.$status) {
          case 'в очікуванні':
            return css`
              color: #ff8c00
            `;
          case 'схвалено':
            return css`
              color: #008000
            `;
          case 'виконано':
            return css`
              color: #0000ff
            `;
          case 'відхилено':
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

    .is-paid-item-title {
      width: 120px;
      
      ${(props) => {
        switch (props.$isPaid) {
          case null:
            return css`
              color: inherit;
            `;
          case true:
            return css`
              color: #008000
            `;
          case false:
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

  .treaty-content {
    padding: 20px 0;
    width: 100%;
    display: flex;

    .left-side {
      max-width: 370px;
      display: flex;
      flex-direction: column;
      gap: 20px 0;

      .error-text-box {
        width: 100%;

        .error-text {
          color: #cf1d00;
        }
      }
      
      .treaty-price-container {
        display: flex;
        align-items: center;
        gap: 0 10px;

        .treaty-price {
          padding: 0 5px;
          width: 70px;
          border: none;
          border-bottom: 1px solid #333333;
          cursor: ${(props) => (props.$isEdit ? 'pointer' : 'default')};
          outline: ${(props) => (props.$isEdit ? '' : 'none')};
        }

        .paid {
          color: #008000;
        }

        .not-paid {
          color: #cf1d00;
        }
      }

      .treaty-employee-container {
        display: flex;
        align-items: center;
        gap: 0 10px;
      }

      .treaty-status-container {
        display: flex;
        align-items: center;
        gap: 0 10px;
      }

      .treaty-client-container {
        display: flex;
        align-items: center;
        gap: 0 10px;
      }

      .treaty-client-info {
        display: flex;
        flex-direction: column;
        gap: 10px 0;

        .client-info-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0 10px;
          
          button {
            padding: 0 10px;
            background-color: ${props => props.theme.backgroundColor};
          }
        }

        .client-info {
          padding: 5px 10px;
          width: 100%;
          display: flex;
          border: 1px solid ${props => props.theme.foregroundColor};
          background-color: ${props => props.theme.backgroundColor};
        }
      }

      .btn-box {
        display: flex;
        justify-content: center;
        gap: 0 40px;

        button {
          padding: 0 10px;
          background-color: ${props => props.theme.backgroundColor};
        }
        
        .change-btn {
          margin-left: auto;
        }
      }
    
    }
    
    .right-side {
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      
      .treaty-employee-info {
        min-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 16px 0;
        
        .employee-info-title {
          display: flex;
          align-items: center;
          gap: 0 10px;
          justify-content: space-between;

          button {
            padding: 0 10px;
            background-color: ${props => props.theme.backgroundColor};
          }
        }
        
        .employee-info {
          padding: 5px 10px;
          display: flex;
          flex-direction: column;
          gap: 5px 0;
          border: 1px solid ${props => props.theme.foregroundColor};
          background-color: ${props => props.theme.backgroundColor};
        }
        
        
      }
    }

  }
`;