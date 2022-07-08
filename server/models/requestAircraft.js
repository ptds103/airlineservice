import mongoose from "mongoose";

const aircraftSchema = mongoose.Schema({
  tailNumber: {
    type: Number,
    min: [1000, 'Must be 4-digits'],
    max: [9999, 'Must be 4-digits'],
    required: true
  },
  aircraftCompany: {
    type: String,
    required: true
  },
  aircraftType: {
    type: String,
    enum: ["Passenger", "Freighter"],
    required: true
  },
  generation: {
    type: Number,
    min: [100, 'Must be 3-digits'],
    max: [999, 'Must be 3-digits'],
    required: true
  },
  maxSeat: {
    type: Number,
    min: 0,
  },
});

const aircraft = mongoose.model("aircraft", aircraftSchema);

export default aircraft;
