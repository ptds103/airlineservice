import React from "react";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteAircraft } from "../../../../actions/aircrafts";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const Delete = ({ post, setEditPage }) => {
  const dispatch = useDispatch();
  const onCLicked = () => {
    setEditPage(true);
  };
  return (
    <Box>
      <Button
        sx={{ justifyContent: "flex-start", width: 1 / 1.56 }}
        size="large"
        color="primary"
        onClick={() => {
          dispatch(deleteAircraft(post._id));
        }}
      >
        <DeleteIcon fontSize="large" />
        Delete
      </Button>
      <Button
        sx={{ justifyContent: "flex-end", width: 1 / 3 }}
        size="large"
        color="primary"
        onClick={onCLicked}
      >
        <ModeEditOutlineOutlinedIcon />
        EDIT
      </Button>
    </Box>
  );
};

export default Delete;
