import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import globStyles from "../../../style/global.js";
import styles from "../../../style/profile.js";
import { setNewUserName } from "../../redux/actions";

export default function Login() {
  const [UserName, setUserName] = useState("");
  const dispatch = useDispatch();
  //
  const handleNameSetup = () => {
    dispatch(setNewUserName(UserName));
    setUserName("");
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "grey",
          marginBottom: 40,
          textAlign: "center",
          //   marginBottom: "auto",
        }}
      >
        Log in
      </Text>
      {/*  Input area */}
      <View style={[styles.setProfileNameCard, globStyles.shadowProps, ,]}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Type your name</Text>
        <TextInput
          value={UserName}
          onChangeText={(val) => setUserName(val)}
          style={styles.profileNameInput}
          onSubmitEditing={handleNameSetup}
        />
        <Button
          disabled={UserName ? false : true}
          title="Confirm"
          style={{ backgroundColor: "white", marginTop: 20 }}
          color={"green"}
          onPress={handleNameSetup}
        />
      </View>
    </View>
  );
}
