import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { clearCord, setCoords } from "../../redux/actions";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import Map from "../Map/Map";
import globStyle from "../../../style/global";

export default function CoordCard({ coord }) {
  const dispatch = useDispatch();
  const addCordinates = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }
    let { coords } = await Location.getCurrentPositionAsync();
    dispatch(
      setCoords({
        lon: coords.longitude,
        lat: coords.latitude,
      }),
    );
  };
  return (
    <View style={{ width: "100%" }}>
      {coord.lat ? (
        <View style={{ width: "100%" }}>
          <View style={{ marginVertical: 5 }}>
            <Button title="Check weather near me" />
          </View>
          <View style={[{ width: "100%", height: 300 }, globStyle.shadowProps]}>
            <Map coord={coord} />
          </View>
          <View style={{ marginVertical: 5 }}>
            <Button
              title="Delete my location"
              color="tomato"
              onPress={() => dispatch(clearCord())}
            />
          </View>
        </View>
      ) : (
        <View style={{ alignItems: "center", width: "100%" }}>
          <Button
            title="Add your location"
            color="green"
            onPress={addCordinates}
          />
        </View>
      )}
    </View>
  );
}
