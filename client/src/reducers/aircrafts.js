
const reducer = (aircrafts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL" :
            return action.payload;
        case 'DELETE':
            return aircrafts.filter((aircraft) => aircraft._id !== action.payload)
        case 'UPDATE' :
            return aircrafts.map((aircraft) => aircraft._id === action.payload._id ? action.payload : aircraft)

        case "CREATE" :
            return [...aircrafts, action.payload]
        default:
            return aircrafts;
    }
}

export default reducer;

// reducer ==> components/aircrafts/flightRoute.js