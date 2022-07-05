import React from "react";
import RouteForm from "./components/newRequests/FlightRoutes/index";
import AircraftForm from "./components/newRequests/reqAirplane/index";
import ScheduleForm from "./components/newRequests/newSchedules/index";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import "./App.css";
import SideBar from "./components/NavBar/index";
import PostRoutes from "./components/View/postRoutes/index";
import PostAircrafts from "./components/View/PostAircrafts/index";
import { Container } from "@mui/system";

const App = () => {
  return (
    
    <Container className="appContainer">
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Purchase%20Aircrafts" element={<AircraftForm />} />
        <Route path="/Requesting%20Routes" element={<RouteForm />} />
        <Route path="/New%20Schedule" element={<ScheduleForm />} />
        <Route path="/Routes" element={<PostRoutes />} />
        <Route path="/Aircrafts" element={<PostAircrafts />} />
      </Routes>

    </Container>

  );
};

export default App;
