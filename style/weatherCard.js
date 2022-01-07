import { StyleSheet } from "react-native";
//
const styles = StyleSheet.create({
  cardWrapper: {
    // flex: 0.7,
  },
  card: {
    flex: 0.4,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    height: 220,
    margin: 10,
    padding: 10,
  },
  homeHistoryCard: {
    // overflow: "hidden",
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    width: 150,
  },
  homeHistoryCardHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#e4f5f5",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default styles;
