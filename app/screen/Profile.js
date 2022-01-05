import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import globStyles from "../../style/global";
import Login from "../components/profile/Login";
import ProfileCard from "../components/profile/ProfileCard";
import { clearCord, clearUser, setNewUserName } from "../redux/actions";

export default function Profile() {
  const user = useSelector((state) => state.user);

  return <>{user.name ? <ProfileCard /> : <Login />}</>;
}
