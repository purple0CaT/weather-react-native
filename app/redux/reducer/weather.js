import { initialState } from "../store/initialstate";

export const weatherReducer = (state = initialState.weather, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
