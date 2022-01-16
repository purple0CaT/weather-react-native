import React, { useEffect, useRef } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import globStyles from "../../../style/global.js";
import { clearCord, clearUser } from "../../redux/actions";
import NavBar from "../navbar/NavBar.js";
import ProfileHistory from "./ProfileHistory.js";
import { useScrollToTop } from "@react-navigation/native";
import CoordCard from "./CoordCard.js";
//
export default function ProfileCard() {
  const ref = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const weather = useSelector((state) => state.weather);
  //
  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearCord());
  };
  useScrollToTop(ref);
  return (
    <>
      {/* <NavBar /> */}
      <ScrollView
        ref={ref}
        style={{
          backgroundColor: "#AAAAA",
          marginBottom: 45,
          paddingBottom: 40,
        }}
      >
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "grey" }}>
            Hello, {user.name}!
          </Text>
        </View>
        {/* WEATHER CARD */}
        <View style={[globStyles.card, globStyles.shadowProps]}>
          <CoordCard coord={weather.mycord} />
        </View>
        {/* PROFILE CARD */}
        <View
          style={[
            globStyles.card,
            { flexDirection: "column" },
            globStyles.shadowProps,
          ]}
        >
          <ProfileHistory history={weather.history} />
        </View>
        {/* LOGOUT */}
        <View style={{ marginBottom: 10 }}>
          <Button
            title="Log out"
            style={globStyles.shadowProps}
            color={"tomato"}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </>
  );
}
