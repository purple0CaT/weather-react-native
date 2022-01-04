import React from "react";
import { View, Text } from "react-native";
import style from "../../../../style/weatherCard.js";
import globalStyle from "../../../../style/global.js";

export default function MainCard() {
  return (
    <View style={style.cardWrapper}>
      <View style={[style.card, globalStyle.shadowProps]}>
        <Text>asd</Text>
        <Text>asd</Text>
      </View>
      <View style={[style.card, globalStyle.shadowProps]}>
        <Text>MAP</Text>
      </View>
    </View>
  );
}
