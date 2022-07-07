import express from "express";
import mongoose from "mongoose";
import RequestAircraft from "../models/requestAircraft.js";

const router = express.Router();

export const getAircrafts = async (req, res) => {
  try {
    const aircraft = await RequestAircraft.find();

    res.status(200).json(aircraft);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAircraft = async (req, res) => {
  const { id } = req.params;
  try {
    const aircraft = await RequestAircraft.findById(id);

    res.status(200).json(aircraft);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAircraft = async (req, res) => {
  const { tailNumber, aircraftCompany, aircraftType,generation, maxSeat } =
    req.body;

  const aircraft = new RequestAircraft({
    tailNumber,
    aircraftCompany,
    aircraftType,
    generation,
    maxSeat,
  });

  try {
    await aircraft.save();

    res.status(201).json(aircraft);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAircraft = async (req, res) => {
  const { id } = req.params;
  const { tailNumber, aircraftCompany, aircraftType, generation, maxSeat } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No aircraft with id: ${id}`);

  const updatedAircraft = {
    tailNumber,
    aircraftCompany,
    aircraftType,
    generation,
    maxSeat,
    _id: id,
  };

  await RequestAircraft.findByIdAndUpdate(id, updatedAircraft, { new: true });

  res.json(updatedAircraft);
};

export const deleteAircraft = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No aircraft with id: ${id}`);

  await RequestAircraft.findByIdAndRemove(id);

  res.json({ message: "aircraft deleted successfully." });
};

export default router;
// controller --> api
