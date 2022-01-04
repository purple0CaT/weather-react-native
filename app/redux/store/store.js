import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { userReducer } from "../reducer/user";
import { weatherReducer } from "../reducer/weather";
import { initialState } from "./initialstate";
//
const bigReducer = combineReducers({
  user: userReducer,
  weather: weatherReducer,
});

const persistConfigs = {
  key: "root",
  storage: AsyncStorage,
  //   transforms: [
  //     encryptTransform({
  //       secretKey: process.env.REACT_APP_KEYENCRIPTION,
  //       onError: function (error) {
  //         // Handle the error.
  //       },
  //     }),
  //   ],
};

const persistedReducer = persistReducer(persistConfigs, bigReducer);
const configureStore = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk),
);
const persistor = persistStore(configureStore);
export { configureStore, persistor };
