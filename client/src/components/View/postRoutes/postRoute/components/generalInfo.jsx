import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
const General = ({ post }) => {
  return (
    <Box className="innerBox">
      <Typography component={"span"}>
        <Box className="firstColumn">Departing Number: KE{post.departureNumber}</Box>
        <Box className="secondColumn">Airport: {post.departureAirport}</Box>
        <Box className="thirdColumn">Standard Time Departure: {post.departureTime} PST</Box>
      </Typography>

      <Typography component={"span"}>
        <Box className="firstColumn">Returning Number: KE{post.arrivalNumber}</Box>
        <Box className="secondColumn">Airport: {post.arrivalAirport}</Box>
        <Box className="thirdColumn">Standard Time Arrival: {post.arrivalTime} PST</Box>
      </Typography>
    </Box>
  );
};

export default General;
