import {
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Input,
  TextField,
  Stack,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFlightRoute, getFlightRoutes } from "../../../actions/flightRoutes";
const Form = () => {
  const [flightRoute, setFlightRoute] = useState({
    departureNumber: "",
    arrivalNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    departureTime: "",
    arrivalTime: "",
    type: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlightRoutes());
  }, [dispatch]);
  const deptRoutes = useSelector((state) => state.flightRoutes.map((e) => e.departureNumber));
  const arrvRoutes = useSelector((state) => state.flightRoutes.map((e) => e.arrivalNumber));

 
  const typeOfSeat = [{ value: "Passenger" }, { value: "Freighter" }];
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createFlightRoute(flightRoute));
    clear();
  };

  return (
    <Paper elevation={7} sx={{ bgcolor: "grey.50" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", p: 5, bgcolor: "#154D8E", color: "grey.400", fontWeight: "700" }}
      >
        REQUESTING ROUTES
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" sx={{ m: 4 }} spacing={25}>
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  departureNumber: e.target.value,
                })
              }
              value={flightRoute.departureNumber}
              error={deptRoutes.find((e) => e === flightRoute.departureNumber) !== undefined}
              startAdornment={<InputAdornment position="start">KE</InputAdornment>}
            />
            <FormHelperText>Departing Number</FormHelperText>
          </FormControl>

          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              inputProps={{ style: { textTransform: "uppercase" } }}
              value={flightRoute.departureAirport}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  departureAirport: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">IATA: </InputAdornment>}
            />
            <FormHelperText>Departing Airport</FormHelperText>
          </FormControl>

          <FormControl variant="standard">
            <TextField
              variant="standard"
              id="time"
              type="time"
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
              sx={{ width: "25ch" }}
            />
            <FormHelperText>Standard Time departureTime</FormHelperText>
          </FormControl>
        </Stack>

        <Stack direction="row" sx={{ m: 4 }} spacing={25}>
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  arrivalNumber: e.target.value,
                })
              }
              value={flightRoute.arrivalNumber}
              error={arrvRoutes.find((e) => e === flightRoute.arrivalNumber) !== undefined}
              startAdornment={<InputAdornment position="start">KE </InputAdornment>}
            />
            <FormHelperText>Arriving Number</FormHelperText>
          </FormControl>

          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              inputProps={{ style: { textTransform: "uppercase" } }}
              value={flightRoute.arrivalAirport}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  arrivalAirport: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">IATA: </InputAdornment>}
            />
            <FormHelperText>Arriving Airport</FormHelperText>
          </FormControl>

          <FormControl variant="standard">
            <TextField
              variant="standard"
              id="time"
              type="time"
              placeholder="00:00"
              value={flightRoute.arrivalTime}
              onChange={(e) =>
                setFlightRoute({
                  ...flightRoute,
                  arrivalTime: e.target.value,
                })
              }
              inputProps={{
                step: 60,
              }}
              sx={{ width: "25ch" }}
            />
            <FormHelperText>Standard Time Arrivial</FormHelperText>
          </FormControl>
        </Stack>

        <Stack direction="row" sx={{ m: 4 }} spacing={20}>
          <Select
            sx={{ width: "25ch" }}
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

        <Stack className="button" direction="row" sx={{ m: 5, p: 5, mx: 0 }} spacing={96}>
          {deptRoutes.find((e) => e === flightRoute.departureNumber) !== undefined ? (
            <Button disabled variant="contained" color="primary" size="large" type="submit">
              Submit
            </Button>
          ) : (
            <Button  href="/"  variant="contained" color="primary" size="large" type="submit">
              Submit
            </Button>
          )}

          <Button variant="contained" color="secondary" size="large" onClick={clear}>
            Clear
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default Form;
