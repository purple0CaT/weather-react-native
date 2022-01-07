import { useScrollToTop } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text, View
} from "react-native";
import NavBar from "../components/navbar/NavBar";
import HomeHistory from "../components/weather/HomeHistory";
import MainCard from "../components/weather/WeatherCard/MainCard";
import weather from "../DataHistory.json";
import weatherNow from "../TestData.json";

//
export default function HomeScreen() {
  const [Refresh, setRefresh] = useState(false);
  const ref = useRef();
  useScrollToTop(ref);

  return (
      <>
        <NavBar />
        <ScrollView ref={ref}>
          <RefreshControl
            refreshing={Refresh}
            onRefresh={() => {
              // alert("Refresh!");
              setRefresh(false);
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "grey",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Weather near you
          </Text>
          <MainCard data={weatherNow} />
          {weather.history.length > 0 && <HomeHistory weather={weather} />}
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </>
  );
}
