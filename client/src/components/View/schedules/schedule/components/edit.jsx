import React, { useState } from "react";
import { Box, InputAdornment, FormControl, FormHelperText, Input, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateSchedule } from "../../../../../actions/schedules";
import "./edit.css";

const EditTrue = ({ post, setEditPage }) => {
  const [schedule, setSchedule] = useState({
    departureNumber: "",
    arrivalNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    departureTime: "",
    arrivalTime: "",
    type: "",
  });
  const typeOfSeat = [
    {
      value: "Passenger",
    },
    {
      value: "Freighter",
    },
  ];
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateSchedule(post._id, schedule));
    setEditPage(false);
    clear();
  };
  const clear = () => {
    setSchedule({
      departureNumber: "",
      arrivalNumber: "",
      departureAirport: "",
      arrivalAirport: "",
      departureTime: "",
      arrivalTime: "",
      type: "",
    });
  };
  return (
    <Box className="box1">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction="row" spacing={32}>
          <FormControl sx={{ m: 1, width: "24ch" }} variant="standard">
            <Input
              placeholder={post.departureNumber}
              value={schedule.departureNumber}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  departureNumber: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">KE</InputAdornment>}
            />
            <FormHelperText>Departing Number</FormHelperText>
          </FormControl>
          <FormControl sx={{ p: 1, width: "24ch" }} variant="standard">
            <Input
              placeholder={post.departureAirport}
              value={schedule.departureAirport}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  departureAirport: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">IATA: </InputAdornment>}
            />
            <FormHelperText>Departing Airport</FormHelperText>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};
export default EditTrue;
