import * as api from "../api";

export const getAircrafts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAircrafts();

    dispatch({ type: "FETCH_AIR", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAircraft = (aircraft) => async (dispatch) => {
  try {
    const { data } = await api.createAircraft(aircraft);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAircraft = (id, aircraft) => async (dispatch) => {
  try {
    const { data } = await api.updateAircraft(id, aircraft);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAircraft = (id) => async (dispatch) => {
  try {
    await api.deleteAircraft(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
//action --> reducer
