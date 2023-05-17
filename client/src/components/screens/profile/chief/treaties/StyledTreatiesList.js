import styled from 'styled-components';

export const StyledTreatiesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .treaty-title {
    padding: 0 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #333333;
    background-color: #FFFFFF;
    color: #333333;
    
    p {
      font-weight: bold;
    }

    .service-item-title {
      width: 200px;
    }

    .place-item-title {
      width: 130px;
    }

    .date-item-title {
      width: 250px;
    }

    .status-item-title {
      width: 100px;
    }

    .btn-box-title {
      width: 100px;
      display: flex;
      justify-content: flex-end;
    }
  }
  
  .sorting-select-container {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #333333;
  }
`;