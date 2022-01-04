import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, ActivityIndicator } from "react-native";
import styles from "../../../style/navBar.js";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/actions.js";
// import Spinner from "react-native-spinkit";
//
export default function NavBar({ focusOnSearch }) {
  //   const [SearchQuery, setSearchQuery] = useState("");
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  //
  const refInput = useRef();
  //
  const handleFocusInput = () => {
    refInput.current.focus();
  };
  useEffect(() => {
    if (focusOnSearch) {
      handleFocusInput();
    }
  }, [focusOnSearch]);
  return (
    <View style={styles.navbarWrapper}>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="search-sharp"
          size={20}
          color="white"
          style={{ flex: 0.1 }}
        />
        <TextInput
          ref={refInput}
          onChangeText={(value) => dispatch(setSearchQuery(value))}
          value={weather.search}
          style={styles.input}
        />
        <ActivityIndicator size="small" color={"white"} style={{ flex: 0.1 }} />
        {/* <Spinner
          //   style={styles.spinner}
          isVisible={true}
          size={20}
          type={"Wave"}
          color={"#FFFFFF"}
        /> */}
      </View>
    </View>
  );
}
