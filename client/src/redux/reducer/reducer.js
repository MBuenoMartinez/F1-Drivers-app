import {
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
} from "../actions/type-actions";
const initialState = {
  drivers: [],
  driverDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
