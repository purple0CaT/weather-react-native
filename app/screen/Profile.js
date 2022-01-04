import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import globStyles from "../../style/global";
import styles from "../../style/profile";
import { clearCord, clearUser, setNewUserName } from "../redux/actions";

export default function Profile() {
  const [UserName, setUserName] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //
  const handleNameSetup = (value) => {
    dispatch(setNewUserName(UserName));
  };
  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearCord());
  };
  return (
    <View style={{ backgroundColor: "#AAAAA", flex: 1 }}>
      {user.name ? (
        <ScrollView style={{ backgroundColor: "#AAAAA", flex: 1 }}>
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
          <View>
            <Button
              title="Log out"
              style={globStyles.shadowProps}
              color={"tomato"}
              onPress={handleLogout}
            />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.setProfileNameCard, globStyles.shadowProps, ,]}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Type your name
            </Text>
            <TextInput
              value={UserName}
              onChangeText={(val) => setUserName(val)}
              style={styles.profileNameInput}
            />
            <Button title="Confirm" onPress={handleNameSetup} />
          </View>
        </View>
      )}
    </View>
  );
}
