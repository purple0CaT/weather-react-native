import { StyleSheet } from "react-native";
//
const styles = StyleSheet.create({
  shadowProps: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  card: {
    flex: 0.5,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 5,
  },
});

export default styles;
