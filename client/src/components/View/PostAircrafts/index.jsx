import React, { useEffect } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { getAircrafts } from "../../../actions/aircrafts";
import { useSelector, useDispatch } from "react-redux";
import PostAircraft from "./PostAircraft/index";
import "./styles.css";
const PostAircrafts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAircrafts());
  }, [dispatch]);

  const aircrafts = useSelector((state) => state.aircrafts);
  return !aircrafts.length ? (
    <CircularProgress />
  ) : (
    <Box className="box">
      {aircrafts.map((post) => (
        <Grid key={post._id}>
          <PostAircraft post={post} />
        </Grid>
      ))}
    </Box>
  );
};
export default PostAircrafts;
