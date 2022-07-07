import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Dates = ({ post, setDates }) => {
  console.log(post)
  return (
    <>
      <Button
        sx={{ width: 1 / 5, p: 1, ml: 55 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => setDates(false)}
      >
        Scheduled Dates
      </Button>
      <Box className="time">
        {post.scheduleDate.map((e, i) => (
          <Typography component={"li"} key={i + e}>
            {e.slice(0, 10)} PST on HL{post.flightInfo[i]}
          </Typography>
        ))}
      </Box>
    </>
  );
};
export default Dates;
