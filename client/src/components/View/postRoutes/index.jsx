import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { getFlightRoutes } from "../../../actions/flightRoutes";
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
      {flightRoutes.map((post) => (
        <Grid className="grid" key={post._id}>
          <PostRoute post={post} />
        </Grid>
      ))}
    </Box>
  );
};
export default PostRoutes;
