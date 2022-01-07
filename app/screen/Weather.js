import React, { useRef, useState } from "react";
import { View, Text, RefreshControl, ScrollView } from "react-native";
import NavBar from "../components/navbar/NavBar";
import { useScrollToTop } from "@react-navigation/native";
import weather from "../TestData.json";
import weatherM from "../DataHistory.json";
import MainCard from "../components/weather/WeatherCard/MainCard";
import FiveDay from "../components/weather/WeatherCard/FiveDay";

export default function Weather() {
  const [Refresh, setRefresh] = useState(false);
  const ref = useRef();
  useScrollToTop(ref);

  return (
    <View style={{ backgroundColor: "#EEEEEE", flex: 1 }}>
      <NavBar />
      <ScrollView ref={ref}>
        <RefreshControl
          refreshing={Refresh}
          onRefresh={() => {
            // alert("Refresh!");
            setRefresh(false);
          }}
        />
        <MainCard data={weather} />
        <FiveDay weather={weatherM} />
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
}
