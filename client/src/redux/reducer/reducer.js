import {
  GET_ALL_DRIVERS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
  GET_ALL_TEAMS,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
