import React, { useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { getFlightRoutes } from "../../../../../../../actions/flightRoutes";
import { useDispatch, useSelector } from "react-redux";
const SelectRoute = ({ newSchedule, setNewSchedule, currentSchedule }) => {
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
      startAdornment={<InputAdornment position="start">FROM KE{currentSchedule.routeInfo.departureNumber} TO:</InputAdornment>}
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
