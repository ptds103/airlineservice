import React from "react";
import { Box, Typography } from "@mui/material";

const General = ({ post }) => {
  return (
    <Box className="innerBox">
      <Typography component={"span"}>
        <Box className="firstColumn" >Tail Number: HL{post.tailNumber}</Box>
        <Box className="secondColumn1" >Aircraft Company: {post.aircraftCompany}</Box>
        <Box className="thirdColumn">Aircraft Generation/Size: {post.generation}</Box>
      </Typography>
      <Typography component={"span"}>
        <Box className="firstColumn">Aircraft Type: {post.aircraftType}</Box>
        <Box className="secondColumn1">Max Seat: {post.maxSeat}</Box>
      </Typography>
    </Box>
  );
};
export default General;
