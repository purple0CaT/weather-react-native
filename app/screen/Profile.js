import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/profile/Login";
import ProfileCard from "../components/profile/ProfileCard";

export default function Profile() {
  const user = useSelector((state) => state.user);

  return <>{user.name ? <ProfileCard /> : <Login />}</>;
}
