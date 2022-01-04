import React from "react";
import { Text, View } from "react-native";
import NavBar from "../components/navbar/NavBar";
import MainCard from "../components/weather/MainWeatherCard/MainCard";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
      <NavBar />
      <MainCard />
    </View>
  );
}
