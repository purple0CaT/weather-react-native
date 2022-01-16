import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import dateFormat from "dateformat";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import globalStyle from "../../../style/global";
import styles from "../../../style/weatherCard";
import { fetchLocationData } from "../../redux/actions";

//
export default function HomeHistory({ weather }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={{ height: 350 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: "grey",
          marginTop: 10,
        }}
      >
        Latest search
      </Text>
      <FlatList
        horizontal
        style={{ width: "100%", height: 370 }}
        data={weather.history.reverse()}
        keyExtractor={(W) => W.id + Math.random()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10 }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  fetchLocationData({
                    lat: item.coord.lat,
                    lon: item.coord.lon,
                  }),
                );
                navigation.navigate("Weather");
              }}
              style={[styles.homeHistoryCard, globalStyle.shadowProps]}
            >
              <>
                <View style={styles.homeHistoryCardHeader}>
                  <Text>{dateFormat(new Date(item.dt * 1000), "HH:MM ")}</Text>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {dateFormat(new Date(item.dt * 1000), "ddd")}
                  </Text>
                  <Text> {dateFormat(new Date(item.dt * 1000), "d mmm")}</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    flexDirection: "column",
                    borderBottomStartRadius: 10,
                  }}
                >
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
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {item.name}
                  </Text>
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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottomStartRadius: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "grey" }}>
                      Wind:{" "}
                    </Text>
                    <Text style={{ fontSize: 16, marginRight: 10 }}>
                      {item.wind.speed}m/s
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
                          transform: [{ rotate: `${item.wind.deg}deg` }],
                        }}
                      />
                    </View>
                  </View>
                </View>
              </>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// export const styles = StyleSheet.create({
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 1,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
// });
