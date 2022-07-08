import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import "./detailInfo.css";
const Detail = ({ newSchedule, filterType, currentSchedule }) => {
  return (
    <Stack className="stack2">
      <Stack direction={"row"}>
        <Typography className="divider" component={"span"}>
          Aircraft KE{currentSchedule.routeInfo.departureNumber}: {currentSchedule.routeInfo.type} <br />
          booked on:
        </Typography>
        <Typography className="divider" component={"span"}>
          Available Crafts for KE{newSchedule.routeInfo.departureNumber}
        </Typography>
      </Stack>

      <Stack direction={"row"}>
        <Box className="time2">
          <Typography component={"span"}>
            {currentSchedule.flightInfo.map((e, i) => (
              <Typography key={e + Math.floor(Math.random() * (i - 0 + 1))} component={"div"}>
                HL{e}
              </Typography>
            ))}
          </Typography>
        </Box>

        <Box className="time2">
          <Typography className="typoHead" component={"span"}>
            {filterType.map((type, key) => (
              <Typography component={"div"} key={type.tailNumber + key}>
                <Typography className="typoChange2">
                  HL{type.tailNumber}
                  {type.aircraftType === "Passenger" && <> with Max Seat {type.maxSeat} </>}
                </Typography>
              </Typography>
            ))}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
export default Detail;
