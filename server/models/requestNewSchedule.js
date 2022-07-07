import mongoose from "mongoose";

const scheduleSchema = mongoose.Schema({
    flightInfo: {
        type: Object,
    },
    routeInfo: Object,
    currentWeight:{
        type: Number,
        default: 0,
    },
    currentPassenger:{
        type:Number,
        default: 0,
    },
    scheduleDate: {
        type: [],
    }
})
var newSchedules = mongoose.model('newSchedules', scheduleSchema)

export default newSchedules