import React, { useEffect } from "react";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../../../actions/schedules";
import Schedule from "./schedule/index";
import "./styles.css";
const PostRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedules());
  }, [dispatch]);

  const schedules = useSelector((state) => state.schedules);
  return !schedules.length ? (
    <CircularProgress />
  ) : (
    <Box className="box">
      <Typography className="typo1" variant="h4">
        BOOKED SCHEDULES
      </Typography>
      {schedules
        .slice(0)
        .reverse()
        .map((post) => (
          <Grid className="grid" key={post._id}>
            <Schedule post={post} />
          </Grid>
        ))}
    </Box>
  );
};
export default PostRoutes;
