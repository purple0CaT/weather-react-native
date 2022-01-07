import { initialState } from "../store/initialstate";

export const weatherReducer = (state = initialState.weather, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        search: action.payload,
      };
    case "CLEAR_CORD":
      return {
        ...state,
        mycord: { lon: null, lat: null },
      };
    case "SET_SEARCH_FOCUS":
      return {
        ...state,
        onFocus: action.payload,
      };
    case "USER_POSITION":
      return {
        ...state,
        mycord: { lon: action.payload.lon, lat: action.payload.lat },
      };
    case "USER_POSITION_DELETE":
      return {
        ...state,
        mycord: { lon: "", lat: "" },
      };
    default:
      return state;
  }
};
