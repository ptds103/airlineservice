import React from "react";
import { Typography, Stack, Box,  } from "@mui/material";
const Detail = ({ newSchedule, filterType }) => {
  return (
    <Stack className="stack2" direction="row">
      <Box className="inlineBox">Aircraft Type: {newSchedule.routeInfo.type}</Box>
      <Box className="inlineBox2">
        Available Crafts
        {filterType.map((type, key) => (
          <Typography component={"div"} key={type.tailNumber + key} sx={{ textAlign: "right" }}>
            {type.aircraftType === "Passenger" && (
              <Box sx={{ width: 1 / 2, display: "inline-flex" }}>MaxSeat {type.maxSeat}</Box>
            )}
            <Box sx={{ width: 1 / 5, display: "inline-flex" }}>HL{type.tailNumber}</Box>
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};
export default Detail;
