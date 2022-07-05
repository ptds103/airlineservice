
const flightReducer = (flightRoutes = [], action) => {
    switch (action.type) {
        case "FETCH_ALL" :
            return action.payload;
        case 'DELETE':
            return flightRoutes.filter((flightRoute) => flightRoute._id !== action.payload)
        case 'UPDATE' :
            return flightRoutes.map((flightRoute) => flightRoute._id === action.payload._id ? action.payload : flightRoute)

        case "CREATE" :
            return [...flightRoutes, action.payload]
        default:
            return flightRoutes;
    }
}

export default flightReducer;

// reducer ==> components/flightRoutes/flightRoute.js