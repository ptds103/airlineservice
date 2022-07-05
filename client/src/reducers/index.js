import { combineReducers } from "redux";
import aircrafts from './aircrafts';
import flightRoutes from "./flightRoutes";
import schedules from './schedules'

export default combineReducers({ aircrafts:aircrafts, schedules:schedules, flightRoutes:flightRoutes })