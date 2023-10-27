import { GET_ALL_DRIVERS } from "./type-actions";
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
