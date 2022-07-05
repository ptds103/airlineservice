const aircraftReducer = (aircrafts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL" :
            return action.payload;
        case 'DELETE':
            return aircrafts.filter((flightRoute) => flightRoute._id !== action.payload)
        case 'UPDATE' :
            return aircrafts.map((flightRoute) => flightRoute._id === action.payload._id ? action.payload : flightRoute)

        case "CREATE" :
            return [...aircrafts, action.payload]
        default:
            return aircrafts;
    }
}

export default aircraftReducer;

// reducer ==> components/flightRoutes/flightRoute.js