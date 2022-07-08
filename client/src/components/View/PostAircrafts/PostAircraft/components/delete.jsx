import React from "react";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteAircraft } from "../../../../../actions/aircrafts";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const Delete = ({ post, setEditPage }) => {
  const dispatch = useDispatch();
  const onCLicked = () => {
    setEditPage(true);
  };
  return (
    <Box direction={"row"}>
      <Button
        sx={{ width: 1 / 4, mr: 35 }}
        size="large"
        onClick={() => {
          dispatch(deleteAircraft(post._id));
        }}
      >
        <DeleteIcon fontSize="large" sx={{ textAlign: "left" }} />
        Delete
      </Button>
      <Button sx={{ width: 1 / 4, ml: 35 }} size="large" onClick={onCLicked}>
        <ModeEditOutlineOutlinedIcon fontSize="large" />
        EDIT
      </Button>
    </Box>
  );
};

export default Delete;
