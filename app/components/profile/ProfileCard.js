import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import globStyles from "../../../style/global.js";
import styles from "../../../style/profile.js";
import { clearCord, clearUser, setNewUserName } from "../../redux/actions";
import NavBar from "../navbar/NavBar.js";
//
export default function ProfileCard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearCord());
  };
  return (
    <ScrollView
      style={{ backgroundColor: "#AAAAA", marginBottom: 45, paddingBottom: 40 }}
    >
      <NavBar />
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "grey" }}>
          Hello, {user.name}!
        </Text>
      </View>
      <View style={[globStyles.card, { height: 400 }]}>
        <Text>Weather near you!</Text>
      </View>
      <View style={[globStyles.card, { flexDirection: "column" }]}>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
        <Text>Search history</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Log out"
          style={globStyles.shadowProps}
          color={"tomato"}
          onPress={handleLogout}
        />
      </View>
    </ScrollView>
  );
}
