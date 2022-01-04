import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import HomeScreen from "../screen/Home";
import Profile from "../screen/Profile";
import Weather from "../screen/Weather";
//
const Tab = createBottomTabNavigator();
//
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: "#b0ebeb",
          borderRadius: 20,
          height: 40,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 4,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
            iconColor = focused ? "tomato" : "gray";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "md-person-circle-sharp"
              : "md-person-circle-outline";
            iconColor = focused ? "tomato" : "gray";
          }
          return (
            <Ionicons
              name={iconName ? iconName : "search"}
              size={24}
              color={iconColor ? iconColor : "grey"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => alert("Search")} />
          ),
        })}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
