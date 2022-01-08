export const initialState = {
  user: {
    name: "Ian",
  },
  weather: {
    search: "",
    oneday: {},
    days: [],
    onFocus: false,
    loading: false,
    history: [],
    mycord: {
      lon: null,
      lat: null,
    },
  },
};
