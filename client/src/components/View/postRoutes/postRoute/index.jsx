import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import EditFalse from "./components/delete";
import EditTrue from "./components/edit";
import General from "./components/generalInfo";

const Post = ({ post }) => {
  const [editPage, setEditPage] = useState(false);

 
  return (
    <Box className="outerBox">
      <General post={post} />
      {editPage ? (
        <Box sx={{ pt: 2, pr: 1 }}>
          <EditTrue post={post} setEditPage={setEditPage} />
        </Box>
      ) : (
        <EditFalse post={post} setEditPage={setEditPage}></EditFalse>
      )}
    </Box>
  );
};
export default Post;
