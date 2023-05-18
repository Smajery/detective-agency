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
      width: 200px;
    }

    .status-item-title {
      width: 100px;
    }

    .is-paid-item-title {
      width: 120px;
    }
  }
  
  .sorting-select-container {
    padding: 0 20px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #333333;
  }
  
  .treaties {
    display: flex;
    flex-direction: column;
    
    .treaties-empty-title {
      margin: 20px auto 0;
    }
  }
`;