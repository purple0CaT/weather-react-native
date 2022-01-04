import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <View style={{ backgroundColor: "#EEEEEE", flex: 1 }}>
      <Text>{user.name}</Text>
    </View>
  );
}
