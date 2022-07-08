import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../../../../../actions/schedules";
import { Box, Typography } from "@mui/material";

const General = ({ post }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSchedules());
  }, [dispatch]);

  const schedules = useSelector((state) => state.schedules);
  const schedule = schedules.find(e =>e._id === post._id)
  console.log(schedule,'this is schedule')

  return (
    <Box className="innerBox">
      <Typography component={"span"}>
        <Box className="firstColumn">Departing Number: KE{schedule.routeInfo.departureNumber}</Box>
        <Box className="secondColumn">Departing Airport: {schedule.routeInfo.departureAirport}</Box>
        <Box className="thirdColumn">Standard Time Departure: {schedule.routeInfo.departureTime} PST</Box>
      </Typography>

      <Typography component={"span"}>
        <Box className="firstColumn">Returning Number: KE{schedule.routeInfo.arrivalNumber}</Box>
        <Box className="secondColumn">Returning Airport: {schedule.routeInfo.arrivalAirport}</Box>
        <Box className="thirdColumn">Standard Time Arrival: {schedule.routeInfo.arrivalTime} PST</Box>
      </Typography>
      <Typography component={"span"}>
        <Box className="firstColumn">Aircraft Type: {post.routeInfo.type}</Box>
      </Typography>
    </Box>
  );
};
export default General;
