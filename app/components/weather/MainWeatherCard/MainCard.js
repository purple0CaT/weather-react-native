import React from "react";
import { View, Text } from "react-native";
import style from "../../../../style/weatherCard.js";
import globalStyle from "../../../../style/global.js";
import MainWeather from "./MainWeather.js";
import Map from "./Map.js";

export default function MainCard() {
  return (
    <View style={style.cardWrapper}>
      <MainWeather />
      <View style={[style.card, globalStyle.shadowProps]}>
        <Map />
      </View>
    </View>
  );
}
