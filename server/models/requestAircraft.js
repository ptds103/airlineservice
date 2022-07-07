import mongoose from "mongoose";

const aircraftSchema = mongoose.Schema({
  tailNumber: {
    type: String,
  },
  aircraftCompany: String,
  aircraftType: {
    type: String,
    enum: ["Passenger", "Freighter"],
  },
  generation: {
    type: String,
  },
  maxSeat: {
    type: String,
    min: 0,
  },
});

const aircraft = mongoose.model("aircraft", aircraftSchema);

export default aircraft;
