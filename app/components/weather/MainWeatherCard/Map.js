import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { MAP_TYPES, UrlTile } from "react-native-maps";
import { RadioButton } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
//
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 53.920555;
const LONGITUDE = -1.858633;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
  const [Checked, setChecked] = useState("clouds_new");
  //
  const region = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "white",
          zIndex: 999,
          paddingVertical: 4,
          paddingHorizontal: 4,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableWithoutFeedback onPress={() => setChecked("clouds_new")}>
          <FontAwesome5
            name="cloud"
            size={16}
            color={Checked === "clouds_new" ? "black" : "grey"}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => setChecked("precipitation_new")}
        >
          <FontAwesome5
            name="cloud-rain"
            size={20}
            color={Checked === "precipitation_new" ? "black" : "grey"}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setChecked("pressure_new")}>
          <Image
            style={{ width: 20, height: 20 }}
            source={{
              uri:
                Checked === "pressure_new"
                  ? "https://mpng.subpng.com/20180410/vfe/kisspng-computer-icons-humidity-moisture-clip-art-pressure-5acc720e775e40.106598141523347982489.jpg"
                  : "https://cdn-icons-png.flaticon.com/512/2938/2938030.png",
            }}
            color={Checked === "pressure_new" ? "black" : "grey"}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setChecked("wind_new")}>
          <FontAwesome5
            name="wind"
            size={20}
            color={Checked === "wind_new" ? "black" : "grey"}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setChecked("temp_new")}>
          <FontAwesome5
            name="thermometer-half"
            size={20}
            color={Checked === "temp_new" ? "black" : "grey"}
          />
        </TouchableWithoutFeedback>
      </View>
      {/* === MAP === */}
      <MapView
        region={region}
        provider={null}
        mapType={MAP_TYPES.NONE}
        rotateEnabled={false}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
      >
        {/* <UrlTile
            urlTemplate="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            maximumZ={19}
            zIndex={1}
          /> */}
        <UrlTile
          urlTemplate={`https://tile.openweathermap.org/map/${Checked}/{z}/{x}/{y}.png?appid=2bfd5ccc7de6daf21fc35b1af7b3431c`}
          maximumZ={19}
          zIndex={99}
        />
      </MapView>
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
