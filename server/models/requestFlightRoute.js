import mongoose from "mongoose";

const flightRouteSchema = mongoose.Schema({
  departureNumber: String,
  arrivalNumber: String,
  departureAirport: String,
  arrivalAirport: String,
  departureTime: {
    type: String,
  },
  arrivalTime: {
    type: String,
  },
  type: {
    type: String,
    enum: ["Passenger", "Freighter"],
  },
});
var FlightRoute = mongoose.model("FlightRoute", flightRouteSchema);

export default FlightRoute;
