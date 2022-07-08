import mongoose from "mongoose";

const scheduleSchema = mongoose.Schema({
    flightInfo: {
        type: Object,
        required: true
    },
    routeInfo: {
        type: Object,
        required: true
    },
    currentPassenger:{
        type:[],
    },
    scheduleDate: {
        type: [],
        required: true
    }
})
var newSchedules = mongoose.model('newSchedules', scheduleSchema)

export default newSchedules