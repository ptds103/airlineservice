import { Typography, Paper, Stack, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAircrafts } from "../../../actions/aircrafts";
import { createSchedule } from "../../../actions/schedules";
import General from "./components/generalInfo";
import Detail from "./components/detailInfo";
import SelectRoute from "./components/selectRoute";
import DatePicker from "./components/datePicker";
import "./styles.css";
const Form = () => {
  const [newSchedule, setNewSchedule] = useState({
    flightInfo: "",
    routeInfo: "",
    currentWeight: "",
    currentPassenger: "",
    scheduleDate: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAircrafts());
  }, [dispatch]);

  const aircrafts = useSelector((state) => state.aircrafts);
  const filterType = aircrafts.filter((type) => type.aircraftType === newSchedule.routeInfo.type);

  const clear = () => {
    setNewSchedule({
      flightInfo: "",
      routeInfo: "",
      currentWeight: "",
      currentPassenger: "",
      scheduleDate: "",
    });
  };
  let tails = [];

  const randomizedTailNumber = (min, max) => {
    tails = [];
    if (max > 0) {
      for (let i = 0; i < newSchedule.scheduleDate.length - 1; i++) {
        let j = Math.floor(Math.random() * (filterType.length - min));
        if (tails.length === 0) {
          tails.push(filterType[j].tailNumber);
        }
        if (tails.length !== 0 && tails[tails.length - 1] !== filterType[j].tailNumber) {
          tails.push(filterType[j].tailNumber);
        } else if (tails[tails.length - 1] === filterType[j].tailNumber) {
          i--;
        }
      }
    }
    return tails;
  };
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    setNewSchedule({
      ...newSchedule,
      flightInfo: randomizedTailNumber(0, newSchedule.scheduleDate.length),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createSchedule(newSchedule));
    clear();
  };

  return (
    <Paper className="topPaper1" elevation={17}>
      <Typography className="typo1" variant="h4">
        NEW FLIGHT SCHEDULE
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack className="topStack" direction="column" sx={{ m: 2 }} spacing={5}>
          <SelectRoute newSchedule={newSchedule} setNewSchedule={setNewSchedule} filterType={filterType} />
          <General newSchedule={newSchedule} />
          <Detail newSchedule={newSchedule} setNewSchedule={setNewSchedule} filterType={filterType} />

          <DatePicker newSchedule={newSchedule} setNewSchedule={setNewSchedule} />
        </Stack>
        <FormGroup direction="row" spacing={5}>
          <FormControlLabel
            className="verify"
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
              />
            }
            label="Once booked with aircrafts, routes and schedules are unable to edit or delete until current schedule is deleted"
          />
        </FormGroup>
        <Stack className="button" direction="row" spacing={105} sx={{ m: 5, p: 5, mx: 0 }}>
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
