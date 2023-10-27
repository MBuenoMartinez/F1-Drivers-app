import { GET_ALL_DRIVERS } from "../actions/type-actions";
const initialState = {
  drivers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
