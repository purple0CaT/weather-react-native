export const initialState = {
  user: {
    name: "Ian",
  },
  weather: {
    search: "",
    oneday: {},
    days: [],
    latest: [],
    loading: false,
    history: [],
    mycord: {
      longitude: null,
      latitude: null,
    },
  },
};
