import React from "react";
import { View } from "react-native";
import globalStyle from "../../../../style/global.js";
import style from "../../../../style/weatherCard.js";
import Map from "../../Map/Map.js";
import MainWeather from "./MainWeather.js";

export default function MainCard({ data }) {
  return (
    <View style={style.cardWrapper}>
      <MainWeather data={data} />
      <View style={[style.card, globalStyle.shadowProps, { padding: 0 }]}>
        <Map coord={data.coord} />
      </View>
    </View>
  );
}
