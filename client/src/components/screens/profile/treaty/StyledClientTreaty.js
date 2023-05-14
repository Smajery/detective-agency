import styled, {css} from 'styled-components';

export const StyledClientTreaty = styled.div`
  margin-top: 60px;
  padding: 20px;
  width: 560px;
  background-color: #FFFFFF;
  color: #333333;
  border: 1px solid #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;

  .treaty-title-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
    position: relative;

    .treaty-delete-btn {
      padding: 2px 10px;
      border: 1px solid #333333;
      position: absolute;
      right: 0;
      color: #cf1d00;
      
      &:hover {
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
        background-color: #cf1d00;
      }
    }
  }

  .about-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px 0;

    .status-text {
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

    .price-text {
      margin-left: auto;
    }

    .treaty-expl-text-box {
      width: 100%;

      .exp-text {
        font-size: 14px;

        .ps-text {
          font-weight: bold;
        }
      }
    }
  }
`;