import * as api from '../api';

export const getSchedules = () => async(dispatch) => {
    try {
        const { data } = await api.fetchSchedules();
        dispatch({ type: "FETCH_ALL", payload: data})
        console.log('this is get airplane', data);
    } catch (error) {console.log(error.message )}
}

export const createSchedule = (aircraft) => async (dispatch) => {
    try {
        const { data } = await api.createschedule(aircraft);
        dispatch({ type: 'CREATE', payload: data});
        console.log('aircraft created', data )
    } catch (error) {console.log(error)}
}

export const updateSchedule = (id, aircraft) => async (dispatch) => {
    try {
      const { data } = await api.updateschedule(id, aircraft);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteSchedule = id => async (dispatch) => {
    try {
        await api.deleteschedule(id)

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error);
    }
}
//action --> reducer