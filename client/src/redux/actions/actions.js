import {
  GET_ALL_DRIVERS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
  GET_ALL_TEAMS,
  CREATE_DRIVER,
  FILTER_DRIVERS,
  ORDER_DRIVERS,
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

export const getDriversByName = (name) => {
  try {
    return async (dispatch) => {
      const endPoint = `http://localhost:3001/drivers?name=${name}`;
      const { data } = await axios.get(endPoint);

      return dispatch({
        type: GET_DRIVERS_BY_NAME,
        payload: data,
      });
    };
  } catch (error) {
    throw Error(error.message);
  }
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

export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const endPoint = "http://localhost:3001/teams";
      const { data } = await axios.get(endPoint);
      return dispatch({
        type: GET_ALL_TEAMS,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const createDriver = (newDriver) => {
  return async (dispatch) => {
    try {
      const endPoint = "http://localhost:3001/createDriver";
      const { data } = await axios.post(endPoint, newDriver);
      return dispatch({
        type: CREATE_DRIVER,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const filterDrivers = (value) => {
  try {
    return {
      type: FILTER_DRIVERS,
      payload: value,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
export const orderDrivers = (value) => {
  try {
    return {
      type: ORDER_DRIVERS,
      payload: value,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
