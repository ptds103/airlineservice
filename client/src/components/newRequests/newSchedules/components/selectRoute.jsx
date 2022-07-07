import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { getFlightRoutes } from "../../../../actions/flightRoutes";
import { useDispatch, useSelector } from "react-redux";
const SelectRoute = ({ newSchedule, setNewSchedule, filterType }) => {
  const dispatch = useDispatch();

  const flightRoutes = useSelector((state) => state.flightRoutes);

  useEffect(() => {
    dispatch(getFlightRoutes());
  }, [dispatch]);

  const handleChange = (e) => {
    setNewSchedule({
      ...newSchedule,
      routeInfo: e.target.value,
    });
  };

  return (
    <Select
      className="select1"
      name="type"
      startAdornment={<InputAdornment position="start">Departing Number</InputAdornment>}
      value={newSchedule.routeInfo}
      onChange={handleChange}
    >
      {flightRoutes &&
        flightRoutes.map((e, i) => (
          <MenuItem key={i + e} value={e}>
            KE{e.departureNumber}
          </MenuItem>
        ))}
    </Select>
  );
};
export default SelectRoute;
