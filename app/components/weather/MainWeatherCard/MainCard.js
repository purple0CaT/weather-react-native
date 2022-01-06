import React, { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import style from "../../../../style/weatherCard.js";
import globalStyle from "../../../../style/global.js";
import MainWeather from "./MainWeather.js";
import Map from "./Map.js";

export default function MainCard({ data }) {
  return (
    <View style={style.cardWrapper}>
      <MainWeather data={data} />
      <View style={[style.card, globalStyle.shadowProps, { padding: 0 }]}>
        <Map coord={data.coord}/>
      </View>
    </View>
  );
}
