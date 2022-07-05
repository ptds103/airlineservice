import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { getAircrafts } from "../../../actions/aircrafts";
import { useSelector, useDispatch } from "react-redux";
import PostAircraft from "./PostAircraft/index";
const PostAircrafts = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAircrafts());
  }, [currentId, dispatch]);

  const aircrafts = useSelector((state) => state.aircrafts);
  return !aircrafts.length ? (
    <CircularProgress />
  ) : (
    <Box
      sx={{
        width: 1,
        my: 0,
        bgcolor: "grey.50",
        color: "black",
        border: "1px solid",
        borderColor: "black",
        borderRadius: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        overflow: "auto",
      }}
      className="formContainer"
    >
      {aircrafts.map((post) => (
        <Grid key={post._id}>
          <PostAircraft post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Box>
  );
};
export default PostAircrafts;
