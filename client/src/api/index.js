import axios from "axios";

const flightRouteUrl = "http://localhost:5000/routes";

export const fetchFlightRoutes = () => axios.get(flightRouteUrl);
export const createFlightRoute = (newFlightRoute) => axios.post(flightRouteUrl, newFlightRoute);
export const updateFlightRoute = (id, updatedFlightRoute) =>
  axios.patch(`${flightRouteUrl}/${id}`, updatedFlightRoute);
export const deleteFlightRoute = (id) => axios.delete(`${flightRouteUrl}/${id}`);

const aircraftUrl = "http://localhost:5000/requestAircrafts";

export const fetchAircrafts = () => axios.get(aircraftUrl);
export const createAircraft = (newAircraft) => axios.post(aircraftUrl, newAircraft);
export const updateAircraft = (id, updatedAircraft) => axios.patch(`${aircraftUrl}/${id}`, updatedAircraft);
export const deleteAircraft = (id) => axios.delete(`${aircraftUrl}/${id}`);

const scheduleRouteUrl = "http://localhost:5000/newSchedules";

export const fetchSchedules = () => axios.get(scheduleRouteUrl);
export const createschedule = (newsShedule) => axios.post(scheduleRouteUrl, newsShedule);
export const updateschedule = (id, updatedSchedule) =>
  axios.patch(`${scheduleRouteUrl}/${id}`, updatedSchedule);
export const deleteschedule = (id) => axios.delete(`${scheduleRouteUrl}/${id}`);
//api --> action
