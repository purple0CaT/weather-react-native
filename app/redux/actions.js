export const setNewUserName = (value) => ({
  type: "ADD_NAME",
  payload: value,
});
export const clearUser = () => ({
  type: "LOG_OUT",
});
//
export const setSearchQuery = (value) => ({
  type: "SET_SEARCH_QUERY",
  payload: value,
});
export const clearCord = () => ({
  type: "CLEAR_CORD",
});
export const setSearchFocus = (value) => ({
  type: "SET_SEARCH_FOCUS",
  payload: value,
});
export const setEmptyHistory = () => ({
  type: "CLEAR_WEATHER_HISTORY",
});
export const setCoords = (cords) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "USER_POSITION",
      payload: {
        lon: cords.lon,
        lat: cords.lat,
      },
    });
  };
};
export const fetchLocationData = (coord) => {
  return async (dispatch, getState) => {
    //
    dispatch({
      type: "SET_SEARCH_FOCUS",
      payload: false,
    });
    dispatch({ type: "WEATHER_LOADING", payload: true });
    let thisState = getState();
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=2bfd5ccc7de6daf21fc35b1af7b3431c`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const weather = await res.json();
        dispatch({ type: "WEATHER_DAY_ADD", payload: weather });
        // Check similar city
        let historyCheck = thisState.weather.history.findIndex(
          (w) =>
            w.name === weather.name && w.sys.country === weather.sys.country,
        );
        if (historyCheck < 0) {
          dispatch({ type: "WEATHER_ADD_HISTORY", payload: weather });
        }
        // SEARCH 5 DAYS
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=daily&appid=2bfd5ccc7de6daf21fc35b1af7b3431c`;
        try {
          const response = await fetch(url);
          if (res.ok) {
            const Fweather = await response.json();
            dispatch({ type: "WEATHER_FDAYS_ADD", payload: Fweather.list });
            dispatch({ type: "WEATHER_LOADING", payload: false });
          } else {
            console.log("Error");
          }
        } catch (error) {
          console.log(error);
        }
        // end
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
