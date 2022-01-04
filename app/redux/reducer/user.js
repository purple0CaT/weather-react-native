import { initialState } from "../store/initialstate";

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
