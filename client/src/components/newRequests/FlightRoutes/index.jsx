import {
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Input,
  Container,
  TextField,
  Stack,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFlightRoute } from "../../../actions/flightRoutes";
import "./styles.css";

const Form = () => {
  const [currentId, setCurrentId] = useState(0);
  const [flightRoute, setFlightRoute] = useState({
    departureNumber: "",
    arrivalNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    departureTime: "",
    arrivalTime: "",
    type: "",
  });

  const route = useSelector((state) =>
    currentId ? state.flightRoutes.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (route) setFlightRoute(route);
  }, [route]);

  const typeOfSeat = [
    {
      value: "Passenger",
    },
    {
      value: "Freighter",
    },
  ];
  const clear = () => {
    setCurrentId(0);
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
    <Container className="formContainer" >
      <Paper className="formPaper" sx={{ maxWidth: "750px"}} elevation={10} display="inline-block">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography sx={{ m: 1 }} variant="h4">
            Creating routes for the flight
          </Typography>

          <Stack className="stack" spacing={4}>
            <Stack direction="row" spacing={4}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <Input
                  value={flightRoute.departureNumber}
                  onChange={(e) =>
                    setFlightRoute({
                      ...flightRoute,
                      departureNumber: e.target.value,
                    })
                  }
                  startAdornment={
                    <InputAdornment position="start">KE</InputAdornment>
                  }
                />
                <FormHelperText id="standard-weight-helper-text">
                  Departing Number
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
                <Input
                  inputProps={{ style: { textTransform: "uppercase" } }}
                  value={flightRoute.departureAirport}
                  onChange={(e) =>
                    setFlightRoute({
                      ...flightRoute,
                      departureAirport: e.target.value,
                    })
                  }
                  startAdornment={
                    <InputAdornment position="start">IATA</InputAdornment>
                  }
                />
                <FormHelperText>Departing Airport</FormHelperText>
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
                  sx={{ width: 150, p:1 }}
                />
                <FormHelperText>Standard Time departureTime</FormHelperText>
              </FormControl>
            </Stack>
          </Stack>

          <Stack className="stack" spacing={4}>
            <Stack direction="row" spacing={4}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <Input
                  value={flightRoute.arrivalNumber}
                  onChange={(e) =>
                    setFlightRoute({
                      ...flightRoute,
                      arrivalNumber: e.target.value,
                    })
                  }
                  startAdornment={
                    <InputAdornment position="start">KE </InputAdornment>
                  }
                />
                <FormHelperText>Arriving Number</FormHelperText>
              </FormControl>

              <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
                <Input
                inputProps={{ style: { textTransform: "uppercase" } }}
                  value={flightRoute.arrivalAirport}
                  onChange={(e) =>
                    setFlightRoute({
                      ...flightRoute,
                      arrivalAirport: e.target.value,
                    })
                  }
                  startAdornment={
                    <InputAdornment position="start">IATA: </InputAdornment>
                  }
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
                  sx={{ width: 150, p:1 }}
                />
                <FormHelperText>Standard Time Arrivial</FormHelperText>
              </FormControl>
            </Stack>
          </Stack>
          <Stack className="stack" spacing={4}>
            <Stack direction="row" spacing={4}>
              <Select
                sx={{ m: 1, width: "25ch" }}
                name="type"
                variant="standard"
                startAdornment={
                  <InputAdornment position="start">TYPE: </InputAdornment>
                }
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
          </Stack>

          <Stack spacing={8}>
            <Stack className="button" direction="row" spacing={60}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Submit
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={clear}
              >
                Clear
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
