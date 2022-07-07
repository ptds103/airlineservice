import {
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Input,
  Stack,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAircraft } from "../../../actions/aircrafts";

const Form = () => {
  const [purchaseAirplane, setpurchaseAirplane] = useState({
    tailNumber: "",
    aircraftCompany: "",
    aircraftType: "",
    generation: "",
    maxSeat: "",
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
  const clear = () => {
    setpurchaseAirplane({
      tailNumber: "",
      aircraftCompany: "",
      aircraftType: "",
      generation: "",
      maxSeat: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createAircraft(purchaseAirplane)).then(clear());
  };

  return (
    <Paper
      elevation={7}
      sx={{
        bgcolor: "grey.50",
      }}
    >
      <Typography
        className="typo"
        variant="h4"
        sx={{
          textAlign: "center",
          p: 5,
          bgcolor: "#154D8E",
          color: "grey.400",
          fontWeight: "700",
        }}
      >
        PURCHASING AIRCRAFT
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction="row" sx={{ m: 4 }} spacing={25}>
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              value={purchaseAirplane.tailNumber}
              onChange={(e) =>
                setpurchaseAirplane({
                  ...purchaseAirplane,
                  tailNumber: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">HL</InputAdornment>}
            />
            <FormHelperText>Aircraft Number</FormHelperText>
          </FormControl>
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              inputProps={{ style: { textTransform: "uppercase" } }}
              value={purchaseAirplane.aircraftCompany}
              onChange={(e) =>
                setpurchaseAirplane({
                  ...purchaseAirplane,
                  aircraftCompany: e.target.value,
                })
              }
            />
            <FormHelperText>Company</FormHelperText>
          </FormControl>
          :
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <Input
              value={purchaseAirplane.generation}
              onChange={(e) =>
                setpurchaseAirplane({
                  ...purchaseAirplane,
                  generation: e.target.value,
                })
              }
            />
            <FormHelperText id="standard-weight-helper-text">Generation</FormHelperText>
          </FormControl>
        </Stack>
        <Stack direction="row" sx={{ m: 4 }} spacing={25}>
          <Select
            sx={{ width: "25ch" }}
            name="type"
            variant="standard"
            startAdornment={<InputAdornment position="start">TYPE: </InputAdornment>}
            value={purchaseAirplane.aircraftType}
            onChange={(e) =>
              setpurchaseAirplane({
                ...purchaseAirplane,
                aircraftType: e.target.value,
              })
            }
          >
            {typeOfSeat.map((e) => (
              <MenuItem key={e.value} value={e.value}>
                {e.value}
              </MenuItem>
            ))}
          </Select>
          <FormControl variant="standard" sx={{ width: "25ch" }}>
            <Input
              value={purchaseAirplane.maxSeat}
              onChange={(e) =>
                setpurchaseAirplane({
                  ...purchaseAirplane,
                  maxSeat: e.target.value,
                })
              }
              startAdornment={<InputAdornment position="start">Max:</InputAdornment>}
              endAdornment={<InputAdornment position="end">People</InputAdornment>}
            />
          </FormControl>
        </Stack>

        <Stack className="button" direction="row" spacing={96} sx={{ m: 5, p: 5, mx: 0 }}>
          <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit">
            Submit
          </Button>

          <Button variant="contained" color="secondary" size="large" onClick={clear}>
            Clear
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default Form;
