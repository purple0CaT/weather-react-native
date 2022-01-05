import { StyleSheet } from "react-native";
//
const styles = StyleSheet.create({
  setProfileNameCard: {
    // flex: 0.2,
    padding: 15,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
  },
  profileNameInput: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
    color: "black",
    fontSize: 20,
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
});

export default styles;
