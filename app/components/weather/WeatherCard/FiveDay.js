import { Feather } from "@expo/vector-icons";
import dateFormat from "dateformat";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import globalStyle from "../../../../style/global";
import styles from "../../../../style/weatherCard";
//

export default function FiveDay({ weather }) {
  return (
    <View style={{ height: 330 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: "grey",
          marginTop: 10,
        }}
      >
        Weather in 5 days
      </Text>
      <FlatList
        data={weather}
        keyExtractor={(W) => W.dt}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <View style={[styles.homeHistoryCard, globalStyle.shadowProps]}>
            <>
              <View style={styles.homeHistoryCardHeader}>
                <Text>{dateFormat(new Date(item.dt * 1000), "HH:MM ")}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {dateFormat(new Date(item.dt * 1000), "ddd")}
                </Text>
                <Text> {dateFormat(new Date(item.dt * 1000), "d mmm")}</Text>
              </View>
              <View style={{ padding: 5, flexDirection: "column" }}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                      uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: "auto",
                  }}
                >
                  {Math.floor(item.main.temp)}°C
                </Text>
                <Text>
                  {item.weather[0].main}, {item.weather[0].description}
                </Text>
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
                    {Math.floor(item.main.feels_like)}°C
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <Text style={{ fontWeight: "bold", color: "grey" }}>
                    Pressure:{" "}
                  </Text>
                  <Text style={{ fontSize: 16 }}>{item.main.pressure} hPa</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontWeight: "bold", color: "grey" }}>
                    Wind:{" "}
                  </Text>
                  <Text style={{ fontSize: 16, marginRight: 10 }}>
                    {item.wind.speed}m/s
                  </Text>
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
                        transform: [{ rotate: `${item.wind.deg}deg` }],
                      }}
                    />
                  </View>
                </View>
              </View>
            </>
          </View>
        )}
        horizontal
        style={{ width: "100%", height: 100 }}
      />
    </View>
  );
}
