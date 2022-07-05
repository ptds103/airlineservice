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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAircraft } from "../../../actions/aircrafts";
import "./styles.css";
import { getFlightRoutes } from "../../../actions/flightRoutes";
import { getSchedules } from "../../../actions/schedules";


const Form = () => {
  const [currentId, setCurrentId] = useState(0);
  const [combinedData, setCombinedData] = useState([])
  const [newSchedule, setpurchaseAirplane] = useState({
    flightInfo: "",
    routeInfo: "",
    currentWeight: "",
    currentPassenger: "",
    scheduleDate: "",
  });
  

  const route = useSelector((state) =>
    currentId ? state.purchaseAirplane.find((p) => p._id === currentId) : null
  );

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSchedules());
  }, [currentId, dispatch]);

  const flightRoutes = useSelector((state) => state);
  console.log(flightRoutes, 'this is flightRoutes')


  useEffect(() => {
    if (route) setpurchaseAirplane(route);
  }, [route]);

  const clear = () => {
    setCurrentId(0);
    newSchedule({
      flightInfo: "",
      routeInfo: "",
      currentWeight: "",
      currentPassenger: "",
      scheduleDate: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createAircraft(newSchedule));
    clear();
  };

  return (
    <Container className="formContainer">
      <Paper className="formPaper" elevation={10} display="inline-block">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h4">New Flight Schedule</Typography>

          <Stack className="stack" spacing={4}>
              <Stack direction="row" spacing={4}>
                <Select
                  sx={{ m: 1, width: "25ch" }}
                  name="type"
                  variant="standard"
                  startAdornment={
                    <InputAdornment position="start">Flight Number: KE </InputAdornment>
                  }
                  value={newSchedule.aircraftType}
                  onChange={(e) =>
                    setpurchaseAirplane({
                      ...newSchedule,
                      aircraftType: e.target.value,
                    })
                  }
                >
                  {flightRoutes.length > 0 && flightRoutes.map((e) => (
                    <MenuItem key={e.departureNumber} value={e.departureNumber}>
                      {e.departureNumber}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </Stack>

          <Stack spacing={8}>
            <Stack className="button" direction="row" spacing={68}>
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
//      <div className='fileInput'><FileBase type="file" multiple={false} onDone={({ base64 }) => setFlightRoute({ ...flightRoute, departureTime: base64 })} /></div>
