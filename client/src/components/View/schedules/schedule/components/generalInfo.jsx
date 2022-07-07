import React from "react";
import { Box, Typography } from "@mui/material";

const General = ({ post }) => {
  return (
    <Box className="innerBox">
      <Typography component={"span"}>
        <Box className="firstColumn">Departing Number: KE{post.routeInfo.departureNumber}</Box>
        <Box className="secondColumn">Airport: {post.routeInfo.departureAirport}</Box>
        <Box className="thirdColumn">Standard Time Departure: {post.routeInfo.departureTime} PST</Box>
      </Typography>

      <Typography component={"span"}>
        <Box className="firstColumn">Returning Number: KE{post.routeInfo.arrivalNumber}</Box>
        <Box className="secondColumn">Airport: {post.routeInfo.arrivalAirport}</Box>
        <Box className="thirdColumn">Standard Time Arrival: {post.routeInfo.arrivalTime} PST</Box>
      </Typography>
      <Typography component={"span"}>
        <Box className="firstColumn">Aircraft Type: {post.routeInfo.type}</Box>
      </Typography>
    </Box>
  );
};
export default General;
