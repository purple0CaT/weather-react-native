import { useScrollToTop } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import NavBar from "../components/navbar/NavBar";
import FiveDay from "../components/weather/WeatherCard/FiveDay";
import MainCard from "../components/weather/WeatherCard/MainCard";

export default function Weather() {
  const [Refresh, setRefresh] = useState(false);
  const weather = useSelector((state) => state.weather);
  const ref = useRef();
  useScrollToTop(ref);
  return (
    <View style={{ backgroundColor: "#EEEEEE", flex: 1 }}>
      <NavBar />
      <ScrollView ref={ref}>
        <RefreshControl
          refreshing={Refresh}
          onRefresh={() => {
            setRefresh(false);
          }}
        />
        {!weather.loading ? (
          weather.days.length > 0 && (
            <>
              <MainCard data={weather.oneday} />
              <FiveDay weather={weather.days} />
            </>
          )
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
}
