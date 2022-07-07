import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import EditFalse from "./components/delete";
import EditTrue from "./components/edit";
import DatesTrue from "./components/dates";
import General from "./components/generalInfo";
import "./index.css";
const Post = ({ post }) => {
  const [editPage, setEditPage] = useState(false);
  const [dates, setDates] = useState(false);
  console.log(post, "this is single schedule");

  return (
    <Box className="outerBox">
      <General post={post} />
      {dates ? (
        <DatesTrue post={post} setDates={setDates} />
      ) : (
        <Button
          sx={{ width: 1 / 5, p: 1, ml: 55 }}
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setDates(true)}
        >
          Dates Scheduled
        </Button>
      )}
      <Box>
      </Box>
      {editPage ? (
        <Box sx={{ pt: 2, pr: 1 }}>
          <EditTrue post={post} setEditPage={setEditPage} />
        </Box>
      ) : (
        <EditFalse post={post} setEditPage={setEditPage} />
      )}
    </Box>
  );
};
export default Post;
