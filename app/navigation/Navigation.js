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
        tabBarOptions: {
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 5,
          right: 5,
          elevation: 0,
          backgroundColor: "#C5E5E5",
          borderRadius: 10,
          height: 50,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "md-person-circle-sharp"
              : "md-person-circle-outline";
          }
          return <Ionicons name={iconName ? iconName : "search"} size={24} />;
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
