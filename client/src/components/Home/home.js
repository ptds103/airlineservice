import React from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { fontWeight } from "@mui/system";

const Home = () => {
  return (
    <>
      <Card sx={{ maxWidth: 2000 }}>
        <CardMedia component="img" height="450" image={require("../../images/kair.gif")} alt="cargo" />
      </Card>
      <Box sx={{ textAlign: "center", fontSize: "30px", mt: 10, color: "#154D8E", fontWeight: 700 }}>
        Welcome to Korean Air LAX Internal Control Department
      </Box>
    </>
  );
};
export default Home;
