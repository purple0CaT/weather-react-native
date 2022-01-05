import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import MapView, {
  MAP_TYPES,
  Overlay,
  PROVIDER_DEFAULT,
  UrlTile,
} from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 53.920555;
const LONGITUDE = -1.858633;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends React.Component {
  static navigationOptions = {
    drawerLabel: "OpenStreetMap",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../../../assets/icon.png")}
        style={{ width: 40, height: 40 }}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }
  get mapType() {
    return this.props.provider === PROVIDER_DEFAULT
      ? MAP_TYPES.NONE
      : MAP_TYPES.NONE;
  }
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <MapView
          region={this.state.region}
          provider={null}
          mapType={this.mapType}
          rotateEnabled={false}
          style={{ flex: 0.4 }}
          style={styles.map}
          showsUserLocation
        >
          <UrlTile
            urlTemplate="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            maximumZ={19}
            zIndex={1}
          />
          <UrlTile
            urlTemplate={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=2bfd5ccc7de6daf21fc35b1af7b3431c`}
            maximumZ={19}
            zIndex={99}
          />
        </MapView>
      </View>
    );
  }
}
export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
