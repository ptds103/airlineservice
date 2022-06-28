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
        enum: ['passenger', 'freighter'],

    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})
var FlightRoute = mongoose.model('FlightRoute', flightRouteSchema)

export default FlightRoute