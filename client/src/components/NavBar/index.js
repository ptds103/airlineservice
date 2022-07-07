import * as React from "react";
import {
  Box,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
  ListItemText,
  Toolbar,
  CssBaseline,
  AppBar,
  Drawer,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapIcon from "@mui/icons-material/Map";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import AirlinesOutlinedIcon from "@mui/icons-material/AirlinesOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import "./styles.css";
import longImage from "../../images/testjpg.jpg";

const sideBar = () => {
  return (
    <Box disableGutters sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // backgroundColor: "white",
          backgroundImage: `url(${longImage})`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography
            component="a"
            href="/"
            sx={{
              fontSize: 90,
              mr: 2,
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "#154D8E",
              textDecoration: "none",
            }}
          >
            KOREAN AIR
            <Typography
              className="logoName"
              variant="h5"
              noWrap
              // component="a"
              href="/"
              sx={{
                display: { display: "inline-flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#154D8E",
                textDecoration: "none",
              }}
            >
              LAX Flight Control Center
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: 280,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar className="here" />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Routes", "Aircrafts", "Schedule", "Faq"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <MapIcon />
                    ) : index === 1 ? (
                      <AirlinesOutlinedIcon />
                    ) : index === 2 ? (
                      <CalendarMonthIcon />
                    ) : (
                      <QuizIcon />
                    )}
                  </ListItemIcon>
                  <Link to={text} style={{ textDecoration: "none" }}>
                    <ListItemText primary={text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List disablePadding>
            {["Requesting Routes", "Purchase Aircrafts", "New Schedule"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <ConnectingAirportsOutlinedIcon />
                    ) : index === 1 ? (
                      <AirlinesOutlinedIcon />
                    ) : (
                      <FlightTakeoffOutlinedIcon />
                    )}
                  </ListItemIcon>
                  <Link to={text} style={{ textDecoration: "none" }}>
                    <ListItemText primary={text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
            <Card>
              <CardMedia
                sx={{ mt: 6 }}
                component="img"
                height="100"
                image={require("../../images/care.jpg")}
                alt="logo"
              />
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="100"
                image={require("../../images/excellence.jpg")}
                alt="logo"
              />
            </Card>
            <Card>
              <CardMedia component="img" height="100" image={require("../../images/logo2.jpg")} alt="logo" />
            </Card>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default sideBar;
