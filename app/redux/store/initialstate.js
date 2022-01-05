export const initialState = {
  user: {
    name: "Ian",
  },
  weather: {
    search: "",
    oneday: {},
    days: [],
    latest: [],
    onFocus: false,
    loading: false,
    history: [],
    mycord: {
      lon: null,
      lat: null,
    },
  },
};
