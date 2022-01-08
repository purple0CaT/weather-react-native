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
    case "WEATHER_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "WEATHER_ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "WEATHER_DAY_ADD":
      return {
        ...state,
        oneday: action.payload,
      };
    case "WEATHER_FDAYS_ADD":
      return {
        ...state,
        days: action.payload,
      };
    case "CLEAR_WEATHER_HISTORY":
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};
