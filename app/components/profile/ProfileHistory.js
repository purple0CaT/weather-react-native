import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchLocationData, setEmptyHistory } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function ProfileHistory({ history }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // 
  const handleHistoryCitySearch = (item) => {
    dispatch(fetchLocationData({ lat: item.coord.lat, lon: item.coord.lon }));
    navigation.navigate("Weather");
  };
  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "grey",
          fontSize: 25,
          marginBottom: 15,
        }}
      >
        Your history search
      </Text>
      {history.length > 0 ? (
        <>
          {history.map((item) => (
            <TouchableOpacity
              key={item.dt + Math.random()}
              style={styles.item}
              onPress={() => handleHistoryCitySearch(item)}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                {item.name}, {item.sys.country}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Clear history"
              color="tomato"
              onPress={() => dispatch(setEmptyHistory())}
            />
          </View>
        </>
      ) : (
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "grey",
              fontSize: 17,
              marginBottom: 15,
            }}
          >
            History search empty
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: "20%",
    padding: 5,
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "silver",
    borderRadius: 20,
  },
});
