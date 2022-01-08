import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator, Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import globalStyle from "../../../style/global.js";
import styles from "../../../style/navBar.js";
import { fetchSearchQuery } from "../../../utility/navBarSsearch.js";
import {
  fetchLocationData,
  setSearchFocus,
  setSearchQuery
} from "../../redux/actions.js";

//
export default function NavBar() {
  const weather = useSelector((state) => state.weather);
  const [SearchLoader, setSearchLoader] = useState(false);
  const [SearchData, setSearchData] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
  const handleCitySearch = async (item) => {
    navigation.navigate("Weather");
    dispatch(fetchLocationData({ lat: item.lat, lon: item.lon }));
  };
  //
  const handleFocusInput = () => {
    refInput.current.focus();
  };
  useEffect(() => {
    if (weather.onFocus) {
      handleFocusInput();
    } else {
      refInput.current.blur();
    }
  }, [weather.onFocus]);
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
            {SearchData && (
              <View
                style={[
                  {
                    backgroundColor: "white",
                    width: "80%",
                    padding: 15,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                  globalStyle.shadowProps,
                ]}
              >
                {SearchData.length > 0 &&
                  SearchData.map((item) => (
                    <TouchableOpacity
                      key={item.lat + Math.random()}
                      onPress={() => handleCitySearch(item)}
                    >
                      <View
                        style={{
                          marginVertical: 10,
                          borderBottomWidth: 1,
                          borderColor: "grey",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#4f4f4f",
                          }}
                        >
                          {item.name}, {item.state}, {item.country}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
