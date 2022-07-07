import React, { useEffect } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { getSchedules } from "../../../actions/schedules";
import { useSelector } from "react-redux";
import Schedule from "./schedule/index";
import "./styles.css";
const PostRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedules());
  }, [dispatch]);

  const schedules = useSelector((state) => state.schedules);
  console.log(schedules);
  return !schedules.length ? (
    <CircularProgress />
  ) : (
    <Box className="box">
      {schedules.map((post) => (
        <Grid className="grid" key={post._id}>
          <Schedule post={post} />
        </Grid>
      ))}
    </Box>
  );
};
export default PostRoutes;
