import React from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { fetchLocationData, setSearchQuery } from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";
import globalStyle from "../../../style/global.js";

export default function SearchCityList({ SearchData }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //
  const handleCitySearch = async (item) => {
    navigation.navigate("Weather");
    Keyboard.dismiss();
    dispatch(setSearchQuery(""));
    dispatch(fetchLocationData({ lat: item.lat, lon: item.lon }));
  };
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          width: "80%",
          padding: 15,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
        globalStyle.shadowProps,
      ]}
    >
      {SearchData.length > 0 &&
        SearchData.map((item) => (
          <TouchableOpacity
            key={item.lat + Math.random()}
            onPress={() => handleCitySearch(item)}
          >
            <View
              style={{
                marginVertical: 10,
                borderBottomWidth: 1,
                borderColor: "grey",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#4f4f4f",
                }}
              >
                {item.name}, {item.state}, {item.country}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
}
