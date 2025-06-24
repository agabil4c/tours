import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({ onDateSelect }) => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);
  const [dates, setDates] = useState([
    new DateObject().setDay(5),
    new DateObject().setDay(14).add(1, "month"),
  ]);
  
  const handleDateChange = (dateObjects) => {
    setDates(dateObjects);
    
    // Format dates for the parent component
    const formattedDates = dateObjects.map(date => 
      date ? date.format("YYYY-MM-DD") : null
    );
    
    onDateSelect({
      startDate: formattedDates[0],
      endDate: formattedDates[1],
      rawDates: dateObjects // Optional: pass the full date objects if needed
    });
  };

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={handleDateChange}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
