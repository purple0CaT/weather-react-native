import { StyleSheet } from "react-native";
//
const styles = StyleSheet.create({
  navbarWrapper: {
    zIndex: 999,
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#C5E5E5",
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 4,
    // marginVertical: 10,
  },
  input: {
    flex: 0.8,
    height: 30,
    fontSize: 20,
    borderRadius: 20,
    backgroundColor: "#AAAAAA",
    color: "white",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    width: "80%",
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#AAAAAA",
  },
});

export default styles;
