import React from "react";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSchedule } from "../../../../../actions/schedules";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
const Delete = ({ post }) => {
  const dispatch = useDispatch();
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
      <Button sx={{ width: 1 / 4, ml: 35 }} size="large" >
        <ModeEditOutlineOutlinedIcon fontSize="large" />
        <Link to={`/Schedule/edit/${post._id}`} style={{ textDecoration: "none" }}>
        EDIT
        </Link>
       </Button>
    </Box>
    
  );
};

export default Delete;
