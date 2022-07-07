import React from "react";
import { Typography, Stack } from "@mui/material";

const General = ({ newSchedule }) => {
  return (
    <Stack className="stack1" spacing={33} direction={"row"}>
      <Stack>
        <Typography component={"span"}>Departure Number: {newSchedule.routeInfo.departureNumber}</Typography>
        <Typography component={"span"}>Arrival Number: {newSchedule.routeInfo.arrivalNumber}</Typography>
      </Stack>
      <Stack>
        <Typography component={"span"}>
          Departure Airport: {newSchedule.routeInfo.departureAirport}
        </Typography>
        <Typography component={"span"}>Arrival Airport: {newSchedule.routeInfo.arrivalAirport}</Typography>
      </Stack>
      <Stack>
        <Typography component={"span"}>Departure Time: {newSchedule.routeInfo.departureTime}</Typography>
        <Typography component={"span"}>Arrival Time: {newSchedule.routeInfo.arrivalTime}</Typography>
      </Stack>
    </Stack>
  );
};
export default General;
