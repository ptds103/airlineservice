import React, { useState } from "react";
import { Stack } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
const DatePicker = ({ newSchedule, setNewSchedule, filterType }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const getDaysArray = (start, end) => {
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const dateChange = (e) => {
    setNewSchedule({
      ...newSchedule,
      scheduleDate: getDaysArray(e.selection.startDate, e.selection.endDate),
    });
    setState([e.selection]);
  };

  return (
    <Stack className="stack3">
      <DateRangePicker
        onChange={dateChange}
        minDate={addDays(new Date(), 1)}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </Stack>
  );
};
export default DatePicker;
