import React, { useEffect } from "react";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFlightRoutes } from "../../../actions/flightRoutes";
import PostRoute from "./postRoute/index";
import "./styles.css";
const PostRoutes = () => {
  const dispatch = useDispatch();
  const flightRoutes = useSelector((state) => state.flightRoutes);
  useEffect(() => {
    dispatch(getFlightRoutes());
  }, [dispatch]);

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
