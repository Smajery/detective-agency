import styled, {css} from 'styled-components';

export const StyledTreatiesItem = styled.form`
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
      width: 250px;
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

    .btn-box {
      width: 100px;
      display: flex;
      justify-content: flex-end;

      button {
        padding: 0 10px;
        background-color: #FFFFFF;
      }
    }
  }

  .treaty-content {
    padding: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    overflow: hidden;

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
      width: 320px;
      display: flex;
      flex-direction: column;
      gap: 10px 0;

      .client-info-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0 10px;
      }

      .client-info {
        padding: 5px 10px;
        width: 100%;
        display: flex;
        border: 1px solid #333333;
        background-color: #FFFFFF;
      }

      button {
        padding: 0 10px;
        background-color: #FFFFFF;
      }
    }

    .btn-box {
      display: flex;
      justify-content: center;
      gap: 0 40px;

      button {
        padding: 0 10px;
        background-color: #FFFFFF;
      }
    }
  }

  .error-text-box {
    width: 100%;

    .error-text {
      color: #cf1d00;
    }
  }
`;