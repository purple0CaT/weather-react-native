import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../style/navBar.js";
import { fetchSearchQuery } from "../../../utility/navBarSsearch.js";
import { setSearchFocus, setSearchQuery } from "../../redux/actions.js";
import SearchCityList from "./SearchCityList.js";
//
export default function NavBar() {
  const weather = useSelector((state) => state.weather);
  const [SearchLoader, setSearchLoader] = useState(false);
  const [SearchData, setSearchData] = useState();
  const dispatch = useDispatch();
  const refInput = useRef();
  //
  const handleSearchData = async (value) => {
    setSearchLoader(true);
    if (value.length > 0) {
      const data = await fetchSearchQuery(value);
      setSearchData(data);
    } else {
      setSearchData(null);
    }
    setSearchLoader(false);
  };
  //
  useEffect(() => {
    if (weather.onFocus) {
      refInput.current.focus();
    } else {
      refInput.current.blur();
    }
  }, [weather]);
  return (
    <>
      <View style={styles.navbarWrapper}>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="search-sharp"
            size={25}
            color="white"
            style={{ flex: 0.1 }}
          />
          <TextInput
            ref={refInput}
            onPressIn={() => dispatch(setSearchFocus(true))}
            onChangeText={(value) => {
              dispatch(setSearchQuery(value));
              handleSearchData(value);
            }}
            value={weather.search}
            style={styles.input}
          />
          {SearchLoader ? (
            <ActivityIndicator
              size="small"
              color={"white"}
              style={{ marginLeft: "auto" }}
            />
          ) : weather.search ? (
            <TouchableOpacity
              onPress={() => {
                dispatch(setSearchQuery(""));
                setSearchData(null);
              }}
              style={{ marginLeft: "auto" }}
            >
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          ) : (
            weather.onFocus && (
              <TouchableOpacity
                style={{ marginLeft: "auto" }}
                onPress={() => dispatch(setSearchFocus(false))}
              >
                <MaterialCommunityIcons
                  name="keyboard-close"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
      {weather.onFocus && (
        <TouchableWithoutFeedback
          onPress={() => dispatch(setSearchFocus(false))}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 900,
              left: 0,
              right: 0,
              top: 45,
              alignItems: "center",
            }}
          >
            {/*  SEARCH CITY LIST */}
            {SearchData && <SearchCityList SearchData={SearchData} />}
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
