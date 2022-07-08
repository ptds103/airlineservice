import React, { useEffect } from "react";
import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import { getAircrafts } from "../../../actions/aircrafts";
import { useSelector, useDispatch } from "react-redux";
import PostAircraft from "./PostAircraft/index";
import "./styles.css";
const PostAircrafts = () => {
  const dispatch = useDispatch();
  const aircrafts = useSelector((state) => state.aircrafts);
  useEffect(() => {
    dispatch(getAircrafts());
  }, [dispatch]);


  return !aircrafts.length ? (
    <CircularProgress />
  ) : (
    <Box className="box">
      <Typography className="typo1" variant="h4">
        AIRCRAFTS LIST
      </Typography>
      {aircrafts
        .slice(0)
        .reverse()
        .map((post) => (
          <Grid key={post._id}>
            <PostAircraft post={post} />
          </Grid>
        ))}
    </Box>
  );
};
export default PostAircrafts;
