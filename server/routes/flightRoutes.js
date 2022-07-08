import express from "express";
import {
  getFlightRoutes,
  getFlightRoute,
  createFlightRoute,
  updateFlightRoute,
  deleteFlightRoute,
} from "../controllers/flightRoutes.js";

const router = express.Router();

router.get("/", getFlightRoutes);
router.post("/", createFlightRoute);
router.get("/", getFlightRoute);
router.patch("/:id", updateFlightRoute);
router.delete("/:id", deleteFlightRoute);

export default router;

//route --> controller
