export const setSearchQuery = (value) => ({
  type: "SET_SEARCH_QUERY",
  payload: value,
});
export const setNewUserName = (value) => ({
  type: "ADD_NAME",
  payload: value,
});

export const clearUser = () => ({
  type: "LOG_OUT",
});
export const clearCord = () => ({
  type: "CLEAR_CORD",
});
export const setSearchFocus = (value) => ({
  type: "SET_SEARCH_FOCUS",
  payload: value,
});
export const setCoords = (cords) => {
  return async (dispatch, getState) => {
    //   dispatch({ type: "WEATHER_LOADING", payload: false });
    //   dispatch({ type: "SET_SEARCH", payload: "" });
    dispatch({
      type: "USER_POSITION",
      payload: {
        lon: cords.lon,
        lat: cords.lat,
      },
    });
  };
};
