import {
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
} from "./type-actions";
import axios from "axios";

export const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const endPoint = "http://localhost:3001/drivers";
      const { data } = await axios.get(endPoint);
      return dispatch({
        type: GET_ALL_DRIVERS,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const getDriverDetail = (id) => {
  return async (dispatch) => {
    try {
      const endPoint = `http://localhost:3001/drivers/${id}`;
      const { data } = await axios.get(endPoint);
      return dispatch({
        type: GET_DRIVER_DETAIL,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const clearDriverDetaiL = () => {
  return {
    type: CLEAR_DRIVER_DETAIL,
    payload: {},
  };
};
