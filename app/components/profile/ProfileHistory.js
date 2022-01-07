import React from "react";
import {
    Button, StyleSheet, Text, TouchableOpacity, View
} from "react-native";

export default function ProfileHistory({ history }) {
  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "grey",
          fontSize: 25,
          marginBottom: 15,
        }}
      >
        Your history search
      </Text>
      {history.map((item) => (
        <TouchableOpacity key={item.id + Math.random()} style={styles.item}>
          <Text style={{ color: "white", fontSize: 18 }}>{item.id}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ marginVertical: 10 }}>
        <Button title="Clear history" color="tomato" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: "20%",
    padding: 5,
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "silver",
    borderRadius: 20,
  },
});
