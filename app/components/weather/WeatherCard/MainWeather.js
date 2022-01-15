import { Feather } from "@expo/vector-icons";
import dateFormat from "dateformat";
import React from "react";
import { Image, Text, View } from "react-native";
import globalStyle from "../../../../style/global.js";
import style from "../../../../style/weatherCard.js";

export default function MainWeather({ data }) {
  return (
    <View style={[style.card, globalStyle.shadowProps]}>
      <View style={{ flex: 0.5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "auto",
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "grey" }}>
              {Math.floor(data.main.temp)}°C
            </Text>
            <Text>
              {data.weather[0].main}, {data.weather[0].description}
            </Text>
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
          <Text style={{ fontSize: 16 }}>
            {" "}
            {Math.floor(data.main.feels_like)}°C
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Pressure: </Text>
          <Text style={{ fontSize: 16 }}>{data.main.pressure} hPa</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Wind: </Text>
          <Text style={{ fontSize: 16, marginRight: 10 }}>
            {data.wind.speed}m/s
          </Text>
          <View
            style={{
              borderRadius: 1000,
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
                transform: [{ rotate: `${data.wind.deg}deg` }],
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
          {data.name}
        </Text>
        <Text style={{ fontWeight: "bold", color: "grey", fontSize: 20 }}>
          {data.sys.country}
        </Text>
        <View style={{ marginTop: "auto" }}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Feather
              name="sunrise"
              size={24}
              color="gold"
              style={{ marginRight: 10 }}
            />
            <Text>
              {dateFormat(new Date(data.sys.sunrise * 1000), "HH:MM")}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Feather
              name="sunset"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <Text>{dateFormat(new Date(data.sys.sunset * 1000), "HH:MM")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
