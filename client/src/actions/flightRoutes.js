import * as api from "../api";

//action creators
export const getFlightRoutes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFlightRoutes();
    dispatch({ type: "FETCH_ROUTE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createFlightRoute = (route) => async (dispatch) => {
  try {
    const { data } = await api.createFlightRoute(route);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
    console.log("this is erorr data");
  }
};

export const updateFlightRoute = (id, route) => async (dispatch) => {
  try {
    const { data } = await api.updateFlightRoute(id, route);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFlightRoute = (id) => async (dispatch) => {
  try {
    await api.deleteFlightRoute(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
//action --> reducer
