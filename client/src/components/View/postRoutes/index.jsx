import React, { useEffect } from "react";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { getFlightRoutes } from "../../../actions/flightRoutes";
import { getSchedules } from "../../../actions/schedules";
import { useSelector } from "react-redux";
import PostRoute from "./postRoute/index";
import "./styles.css";
const PostRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlightRoutes());
  }, [dispatch]);

  const flightRoutes = useSelector((state) => state.flightRoutes);

  return !flightRoutes.length ? (
    <CircularProgress />
  ) : (
    <Box className="box">
      <Typography className="typo1" variant="h4">
        ROUTES AVAILABLE
      </Typography>
      {flightRoutes
        .slice(0)
        .reverse()
        .map((post) => (
          <Grid className="grid" key={post._id}>
            <PostRoute post={post} />
          </Grid>
        ))}
    </Box>
  );
};
export default PostRoutes;
