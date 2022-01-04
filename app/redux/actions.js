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
