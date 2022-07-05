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
  Stack,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAircraft } from "../../../actions/aircrafts";
import "./styles.css";

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
    <Container className="formContainer">
      <Paper className="formPaper"  sx={{ maxWidth: "750px"}} elevation={10} display="inline-block">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ m: 1 }}>
            Purchasing Aircrafts
            </Typography>

          <Stack className="stack" spacing={4}>
            <Stack direction="row" spacing={4}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <Input
                  id="standard-adornment-weight"
                  value={purchaseAirplane.tailNumber}
                  onChange={(e) =>
                    setpurchaseAirplane({
                      ...purchaseAirplane,
                      tailNumber: e.target.value,
                    })
                  }
                  startAdornment={
                    <InputAdornment position="start">HL</InputAdornment>
                  }
                />
                <FormHelperText id="standard-weight-helper-text">
                  Aircraft Number
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
                <Input
                  id="standard-adornment-weight"
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
              <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
                <Input
                  id="standard-adornment-weight"
                  value={purchaseAirplane.generation}
                  onChange={(e) =>
                    setpurchaseAirplane({
                      ...purchaseAirplane,
                      generation: e.target.value,
                    })
                  }
                />
                <FormHelperText id="standard-weight-helper-text">
                  Generation
                </FormHelperText>
              </FormControl>
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
                <FormControl sx={{ pt: 3, width: "25ch" }} variant="standard">
                  <Input
                    id="standard-adornment-weight"
                    value={purchaseAirplane.maxSeat}
                    onChange={(e) =>
                      setpurchaseAirplane({
                        ...purchaseAirplane,
                        maxSeat: e.target.value,
                      })
                    }
                    endAdornment={
                      <InputAdornment position="end">People</InputAdornment>
                    }
                  />
                  <FormHelperText id="standard-weight-helper-text">
                    maxSeat(Only Passenger Flight)
                  </FormHelperText>
                </FormControl>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={8}>
            <Stack className="button" direction="row" spacing={60}>
              <Button
                className="buttonSubmit"
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
