import styled from 'styled-components';

export const CompanyCalendar = styled.div`
  width: 100%;
  .date-range-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .selected-date-range {
    margin-top: 10px;
    padding: 5px 10px;
    background: ${(props) => props.theme.purpleGra};
    color: #ffffff;
    border-radius: 20px;
    display: inline-block;
    font-size: 14px;
  }

  .react-datepicker {
    background-color: white;
    border: none;
  }

  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background-color: #E0E7FF;
    color: #000;
    border-radius: 50%;
  }

  .react-datepicker__day--in-selecting-range {
    background-color: #b3cde0;
  }


  .react-datepicker__current-month,
  .custom-header {
    color: #3E73B2;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
  }
  
  .react-datepicker__day--outside-month {
    visibility: hidden;
  }
    .custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  background-color: white;
  color: #3E73B2;
  font-weight: bold;
}

.custom-header button {
  background: none;
  border: none;
  color: #3E73B2;
  font-size: 1.2em;
  cursor: pointer;
}

.custom-header span {
  font-size: 1.2em;
}
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  background-color: white;
  color: #3E73B2;
  font-weight: bold;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  color: #363636;
  font-size: 1.2em;
  cursor: pointer;
`;

export const HeaderTitle = styled.span`
  font-size: 1.2em;
`;

export const ResetButton = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 0.8em;
  cursor: pointer;
  width: 6em;
  margin-right: 4.5em;
`;

export const ApplyButton = styled.button`
  background: ${(props) => (props.disabled ? '#E0E0E0' : '#C2C7FF')};
  color: ${(props) => (props.disabled ? 'black' : '#FFFFFF')};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 1em;
  width: 7em;
`;
