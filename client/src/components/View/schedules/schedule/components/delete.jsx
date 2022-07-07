import React from "react";
import { Box, Button, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteSchedule } from "../../../../../actions/schedules";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const Delete = ({ post, setEditPage }) => {
  const dispatch = useDispatch();
  const onCLicked = () => {
    // setEditPage(true);
  };
  return (
    <Box>
      <Button
        sx={{ width: 1 / 4, mr: 35 }}
        size="large"
        onClick={() => {
          dispatch(deleteSchedule(post._id));
        }}
      >
        <DeleteIcon fontSize="large" />
        Delete
      </Button>
      <Button sx={{ width: 1 / 4, ml: 35 }} size="large" onClick={onCLicked}>
        <ModeEditOutlineOutlinedIcon fontSize="large" />
        <Link to={'/edit/:id'} style={{ textDecoration: "none" }}>
        EDIT

        </Link>
       </Button>
    </Box>
  );
};

export default Delete;
