import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../../style/navBar.js";
import { Ionicons } from "@expo/vector-icons";
//
export default function NavBar() {
  const [SearchQuery, setSearchQuery] = useState("");
  return (
    <View style={styles.navbarWrapper}>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="search-sharp"
          size={24}
          color="white"
          style={{ flex: 0.2 }}
        />
        <TextInput
          onChangeText={setSearchQuery}
          value={SearchQuery}
          style={styles.input}
        />
      </View>
    </View>
  );
}
