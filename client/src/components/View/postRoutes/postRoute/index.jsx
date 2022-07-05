import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import EditFalse from "./delete";
import EditTrue from "./edit";
const Post = ({ post }) => {
  const [editPage, setEditPage] = useState(false);

  return (
    <Box
      sx={{
        p: 3,
        pr: 0,
        border: "1px solid",
        borderColor: "#154D8E",
      }}
    >
      <Box
        sx={{
          width: 0.96,
          m: 2,
          bgcolor: "white",
          border: "2px solid",
          borderColor: "#154D8E",
        }}
      >
        <Typography component={"span"}>
          <Box sx={{ m: 1, display: "inline-flex", width: 1 / 2.3 }}>
            Departing Number: KE{post.departureNumber}
          </Box>
          <Box sx={{ m: 1, display: "inline-flex", width: 1 / 4.3 }}>
            Airport: {post.departureAirport}
          </Box>
          <Box sx={{ m: 1, display: "inline-flex", width: 1 / 3.5 }}>
            Standard Time Departure: {post.departureTime} PST
          </Box>
        </Typography>

        <Typography component={"span"}>
          <Box sx={{ m: 1, display: "inline-flex", width: 1 / 2.3 }}>
            Returning Number: KE{post.arrivalNumber}
          </Box>
          <Box sx={{ m: 1, display: "inline-flex", width: 1 / 3.95 }}>
            Airport: {post.arrivalAirport}
          </Box>
          <Box sx={{ m: 1, display: "inline", width: 1 / 3 }}>
            Standard Time Arrival: {post.arrivalTime} PST
          </Box>
        </Typography>
      </Box>

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
