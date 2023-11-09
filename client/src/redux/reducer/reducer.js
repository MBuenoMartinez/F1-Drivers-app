import {
  GET_ALL_DRIVERS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_DETAIL,
  CLEAR_DRIVER_DETAIL,
  GET_ALL_TEAMS,
  FILTER_DRIVERS,
  ORDER_DRIVERS,
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
      let backUpToFilter = [...state.driversBackUp];
      let driversFiltered;

      if (action.payload === "AllDrivers") {
        driversFiltered = backUpToFilter;
      } else if (action.payload === "DriversFromApi") {
        driversFiltered = backUpToFilter.filter((driver) => !isNaN(driver.id));
      } else if (action.payload === "DriversFromDB") {
        driversFiltered = backUpToFilter.filter((driver) => isNaN(driver.id));
      } else {
        driversFiltered = backUpToFilter.filter((driver) => {
          const teamsArray = driver.teams ? driver.teams.split(", ") : [];
          return teamsArray.includes(action.payload);
        });
      }

      return {
        ...state,
        drivers: driversFiltered,
      };
    case ORDER_DRIVERS:
      let backUpToOrder = [...state.drivers];
      let driversOrdered;

      if (action.payload === "AlfabeticAscendant") {
        driversOrdered = backUpToOrder.sort((a, b) => {
          const compareName = a.name.localeCompare(b.name);
          if (compareName === 0) {
            return a.lastName.localeCompare(b.lastName);
          }
          return compareName;
        });
      }

      if (action.payload === "AlfabeticDescendant") {
        driversOrdered = backUpToOrder.sort((a, b) => {
          const compareName = b.name.localeCompare(a.name);
          if (compareName === 0) {
            return b.lastName.localeCompare(a.lastName);
          }
          return compareName;
        });
      }

      if (action.payload === "YearOfBirthAscendant")
        driversOrdered = backUpToOrder.sort((a, b) => {
          const yearA = parseInt(a.dob.split("-")[0]);
          const yearB = parseInt(b.dob.split("-")[0]);
          return yearA - yearB;
        });
      if (action.payload === "YearOfBirthDescendant")
        driversOrdered = backUpToOrder.sort((a, b) => {
          const yearA = parseInt(a.dob.split("-")[0]);
          const yearB = parseInt(b.dob.split("-")[0]);
          return yearB - yearA;
        });

      return {
        ...state,
        drivers: driversOrdered,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
