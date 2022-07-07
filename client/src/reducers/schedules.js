const scheduleReducer = (schedules = [], action) => {
  switch (action.type) {
    case "FETCH_SCHEDULE":
      return action.payload;
    case "DELETE":
      return schedules.filter((scheduleRoute) => scheduleRoute._id !== action.payload);
    case "UPDATE":
      return schedules.map((scheduleRoute) =>
        scheduleRoute._id === action.payload._id ? action.payload : scheduleRoute
      );
    case "CREATE":
      return [...schedules, action.payload];
    default:
      return schedules;
  }
};

export default scheduleReducer;

// reducer ==> components/scheduleRoutes/scheduleRoute.js
