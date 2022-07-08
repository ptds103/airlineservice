import React from "react";
import { Typography, Stack } from "@mui/material";
import "./generalInfo.css";

const General = ({ newSchedule, currentSchedule }) => {
  return (
    <Stack className="stack11" spacing={18} direction={"row"}>
      <Stack>
        <br />
        <Typography>DEPARTURE:</Typography>
        <Typography>ARRIVAL: </Typography>
      </Stack>
      <Stack>
        <Typography className="typoHead" component={"span"}>
          FLIGHT NUMBER
        </Typography>
        <Typography className="typoChange" component={"span"}>
          FROM: KE{currentSchedule.routeInfo.departureNumber} {` ==> `}
          {newSchedule.routeInfo.departureNumber && <>KE{newSchedule.routeInfo.departureNumber}</>}
        </Typography>
        <Typography className="typoChange" component={"span"}>
          FROM: KE{currentSchedule.routeInfo.arrivalNumber} {` ==> `}
          {newSchedule.routeInfo.arrivalNumber && <>KE{newSchedule.routeInfo.arrivalNumber}</>}
        </Typography>
      </Stack>
      <Stack>
        <Typography className="typoHead" component={"span"}>
          AIRPORT
        </Typography>
        <Typography className="typoChange" component={"span"}>
          FROM: {currentSchedule.routeInfo.departureAirport} {" ==> "}
          {newSchedule.routeInfo.departureAirport && <>{newSchedule.routeInfo.departureAirport}</>}
        </Typography>
        <Typography className="typoChange" component={"span"}>
          FROM: {currentSchedule.routeInfo.arrivalAirport} {" ==> "}
          {newSchedule.routeInfo.arrivalAirport && <>{newSchedule.routeInfo.arrivalAirport}</>}
        </Typography>
      </Stack>
      <Stack>
        <Typography className="typoHead" component={"span"}>
          STANDARD TIME
        </Typography>
        <Typography className="typoChange" component={"span"}>
          FROM: {currentSchedule.routeInfo.departureTime} {" ==> "} {newSchedule.routeInfo.departureTime}
        </Typography>
        <Typography className="typoChange" component={"span"}>
          FROM: {currentSchedule.routeInfo.arrivalTime} {" ==> "} {newSchedule.routeInfo.arrivalTime}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default General;
