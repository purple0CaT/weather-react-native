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
    default:
      return state;
  }
};
