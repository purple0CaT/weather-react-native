import { useScrollToTop } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator, RefreshControl,
  ScrollView,
  Text,
  View
} from "react-native";
import { useSelector } from "react-redux";
import { fetchIpLocationWeather } from "../../utility/homePage";
import NavBar from "../components/navbar/NavBar";
import HomeHistory from "../components/weather/HomeHistory";
import MainCard from "../components/weather/WeatherCard/MainCard";

//
export default function HomeScreen() {
  const [WeatherNow, setWeatherNow] = useState();
  const [Refresh, setRefresh] = useState(false);
  const weather = useSelector((state) => state.weather);
  const ref = useRef();
  useScrollToTop(ref);
  //
  async function fetchHomeData() {
    setRefresh(true);
    const data = await fetchIpLocationWeather();
    setWeatherNow(data);
    setRefresh(false);
  }
  //
  useEffect(() => {
    fetchHomeData();
  }, []);
  return (
    <>
      {/* <NavBar /> */}
      <ScrollView ref={ref}>
        <RefreshControl
          refreshing={Refresh}
          onRefresh={async () => {
            fetchHomeData();
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
        {WeatherNow ? (
          <MainCard data={WeatherNow} />
        ) : (
          <ActivityIndicator size="large" color="black" />
        )}
        {weather.history.length > 0 && <HomeHistory weather={weather} />}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </>
  );
}
