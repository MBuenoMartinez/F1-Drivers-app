import {
  GET_ALL_DRIVERS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
  GET_ALL_TEAMS,
  FILTER_DRIVERS,
} from "../actions/type-actions";
const initialState = {
  drivers: [],
  driversBackUp: [],
  driverDetail: {},
  teams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        driversBackUp: action.payload,
      };
    case GET_DRIVERS_BY_NAME:
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: action.payload,
      };
    case CLEAR_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: action.payload,
      };
    case GET_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case FILTER_DRIVERS:
      let backUp = [...state.driversBackUp];
      let driversFiltered;
      // if (action.payload === "Teams")
      if (action.payload === "AllDrivers") driversFiltered = backUp;

      if (action.payload === "DriversFromApi")
        driversFiltered = backUp.filter((driver) => !isNaN(driver.id));
      if (action.payload === "DriversFromDB")
        driversFiltered = backUp.filter((driver) => isNaN(driver.id));

      return {
        ...state,
        drivers: driversFiltered,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
