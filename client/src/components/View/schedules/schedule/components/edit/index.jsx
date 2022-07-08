import React, { useEffect, useState } from "react";
import { Paper, Typography, Button, FormGroup, FormControlLabel, Checkbox, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules, updateSchedule } from "../../../../../../actions/schedules";
import { getAircrafts } from "../../../../../../actions/aircrafts";
import General from "./components/generalInfo";
import Detail from "./components/detailInfo";
import SelectRoute from "./components/selectRoute";
import DatePicker from "./components/datePicker";
import { useParams } from "react-router-dom";
import "./index.css";

const EditTrue = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSchedules());
  }, [dispatch]);

  const schedule = useSelector((state) => state.schedules);

  const [newSchedule, setNewSchedule] = useState({
    flightInfo: "",
    routeInfo: "",
    currentWeight: "",
    currentPassenger: "",
    scheduleDate: "",
  });

  useEffect(() => {
    dispatch(getAircrafts());
  }, [dispatch]);
  const aircrafts = useSelector((state) => state.aircrafts);
  const filterType = aircrafts.filter((type) => type.aircraftType === newSchedule.routeInfo.type);
  const currentSchedule = schedule.find((e) => e._id === id);
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
      if (tails.length === 0) {
        tails.push(filterType[0].tailNumber);
      }
      for (let i = 0; i < newSchedule.scheduleDate.length - 1; i++) {
        let j = Math.floor(Math.random() * (filterType.length - min));
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
    dispatch(updateSchedule(currentSchedule._id, newSchedule));
    clear();
  };

  return (
    <Paper className="topPaper1" elevation={17}>
      <Typography className="typo1" variant="h4">
        EDIT SCHEDULE
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack className="topStack" direction="column" sx={{ m: 2 }} spacing={5}>
          <SelectRoute
            newSchedule={newSchedule}
            setNewSchedule={setNewSchedule}
            currentSchedule={currentSchedule}
          />
          <General newSchedule={newSchedule} currentSchedule={currentSchedule} />
          <Detail
            newSchedule={newSchedule}
            setNewSchedule={setNewSchedule}
            currentSchedule={currentSchedule}
            filterType={filterType}
          />
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
export default EditTrue;
