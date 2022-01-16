import { StyleSheet, Platform, StatusBar } from "react-native";
//
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default styles;
