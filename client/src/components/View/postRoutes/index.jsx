import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { getFlightRoutes } from "../../../actions/flightRoutes";
import { useSelector } from "react-redux";
import PostRoute from "./postRoute/index";
const PostRoutes = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlightRoutes());
  }, [currentId, dispatch]);

  const flightRoutes = useSelector((state) => state.flightRoutes);

  return !flightRoutes.length ? (
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
        overflowY: "auto",
      }}
      className="formContainer"
    >
      {flightRoutes.map((post) => (
        <Grid className="grid" key={post._id}>
          <PostRoute
            post={post}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </Grid>
      ))}
    </Box>
  );
};
export default PostRoutes;
