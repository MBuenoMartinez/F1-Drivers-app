import {
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
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

export const getDriversByName = (name) => {
  return async (dispatch) => {
    try {
      const endPoint = `http://localhost:3001/drivers?name=${name}`;
      const response = await axios.get(endPoint);

      return dispatch({
        type: GET_DRIVERS_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      if (error.response.status === 404) {
        return alert("Not found drivers with that name");
      }
      throw Error(error.message);
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

export const createDriver = (newDriver) => {
  return async () => {
    try {
      const endPoint = "http://localhost:3001/createDriver";
      const response = await axios.post(endPoint, newDriver);
      if (response.status === 200) {
        return alert("Your driver has been created");
      }
    } catch (error) {
      if (error.response.status === 400) {
        return alert(
          "The driver is not created because the name is already taken"
        );
      }
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
