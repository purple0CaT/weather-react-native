import React, { useRef, useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import NavBar from "../components/navbar/NavBar";
import HomeHistory from "../components/weather/MainWeatherCard/HomeHistory";
import MainCard from "../components/weather/MainWeatherCard/MainCard";
import weatherNow from "../TestData.json";
import weather from "../DataHistory.json";
import { useScrollToTop } from "@react-navigation/native";
//
export default function HomeScreen() {
  const [Refresh, setRefresh] = useState(false);
  const ref = useRef();
  useScrollToTop(ref);

  return (
    <View style={{ backgroundColor: "#EEEEEE" }}>
      <NavBar />
      <ScrollView ref={ref}>
        <RefreshControl
          refreshing={Refresh}
          onRefresh={() => {
            // alert("Refresh!");
            setRefresh(false);
          }}
        />
        <MainCard data={weatherNow} />
        {weather.history.length > 0 && <HomeHistory weather={weather} />}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
}
