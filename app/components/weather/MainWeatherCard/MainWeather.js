import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import globalStyle from "../../../../style/global.js";
import style from "../../../../style/weatherCard.js";

export default function MainWeather() {
  const user = useSelector((state) => state.user);
  return (
    <View style={[style.card, globalStyle.shadowProps]}>
      <View style={{ flex: 0.5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://click-weather.vercel.app/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=256&q=75",
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "grey" }}>
              5°C
            </Text>
            <Text>Some text</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            marginTop: "auto",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "grey" }}>
            Feels like:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>2°C</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Pressure: </Text>
          <Text style={{ fontSize: 16 }}>1015 hPa</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Wind: </Text>
          <Text style={{ fontSize: 16, marginRight: 10 }}>4.63m/s</Text>
          <View
            style={{
              borderRadius: "50%",
              padding: 2,
              backgroundColor: "#CAEEEE",
              shadowColor: "grey",
              shadowOpacity: 0.8,
              shadowRadius: 5,
              shadowOffset: { width: 2, height: 2 },
            }}
          >
            <Feather
              name="navigation-2"
              size={20}
              color="black"
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            />
          </View>
        </View>
      </View>
      {/* RIGHT SIDE */}
      <View
        style={{ flex: 0.5, alignItems: "flex-end", flexDirection: "column" }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
          CItyName
        </Text>
        <Text style={{ fontWeight: "bold", color: "grey", fontSize: 20 }}>
          ua
        </Text>
        <View style={{ marginTop: "auto" }}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Feather
              name="sunrise"
              size={24}
              color="gold"
              style={{ marginRight: 10 }}
            />
            <Text>SunRise</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Feather
              name="sunset"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <Text>SunSet</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
