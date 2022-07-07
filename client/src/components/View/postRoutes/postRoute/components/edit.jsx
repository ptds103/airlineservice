import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Select,
  FormControl,
  FormHelperText,
  Input,
  Stack,
  MenuItem,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateFlightRoute } from "../../../../../actions/flightRoutes";
import "./edit.css";
const EditTrue = ({ post, setEditPage }) => {
  const [flightRoute, setFlightRoute] = useState({
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
    dispatch(updateFlightRoute(post._id, flightRoute));
    setEditPage(false);
    clear();
  };
  const clear = () => {
    setFlightRoute({
      departureNumber: "",
      arrivalNumber: "",
      departureAirport: "",
      arrivalAirport: "",
      departureTime: "",
      arrivalTime: "",
      type: "",
    });
  };
  const cancel = () => {
    setEditPage(false);
  };
  return (
    <Box className="box1">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction="row" spacing={32}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.departureNumber}
              value={flightRoute.departureNumber}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  departureNumber: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">KE</InputAdornment>}
            />
            <FormHelperText>Departing Number</FormHelperText>
          </FormControl>
          <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.departureAirport}
              value={flightRoute.departureAirport}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  departureAirport: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">IATA: </InputAdornment>}
            />
            <FormHelperText id="standard-weight-helper-text">Departing Airport</FormHelperText>
          </FormControl>

          <FormControl variant="standard">
            <TextField
              variant="standard"
              id="time"
              type="time"
              placeholder="00:00"
              value={flightRoute.departureTime}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  departureTime: e.target.value,
                })
              }
              inputProps={{
                step: 60,
              }}
              sx={{ width: 150, p: 1 }}
            />
            <FormHelperText>Standard Time departure</FormHelperText>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={32}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.arrivalNumber}
              value={flightRoute.arrivalNumber}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  arrivalNumber: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">KE</InputAdornment>}
            />
            <FormHelperText>Arriving Number</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.arrivalAirport}
              value={flightRoute.arrivalAirport}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  arrivalAirport: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">IATA: </InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText>Arriving Airport</FormHelperText>
          </FormControl>

          <FormControl variant="standard">
            <TextField
              variant="standard"
              id="time"
              type="time"
              placeholder="00:00"
              value={flightRoute.Arrivial}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  arrivalTime: e.target.value,
                })
              }
              inputProps={{
                step: 60,
              }}
              sx={{ width: 150 }}
            />
            <FormHelperText>Standard Time Arrivial</FormHelperText>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Select
            sx={{ m: 1, width: "25ch" }}
            name="type"
            variant="standard"
            startAdornment={<InputAdornment position="start">TYPE: </InputAdornment>}
            value={flightRoute.type}
            onChange={(e) =>
              setFlightRoute({
                ...flightRoute,
                type: e.target.value,
              })
            }
          >
            {typeOfSeat.map((e) => (
              <MenuItem key={e.value} value={e.value}>
                {e.value}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack className="button" direction="row" spacing={42}>
          <Button variant="contained" color="primary" size="large" type="submit">
            Submit
          </Button>

          <Button variant="contained" color="secondary" size="large" onClick={clear}>
            Clear
          </Button>
          <Button variant="contained" color="secondary" size="large" onClick={cancel}>
            Cancel
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default EditTrue;
