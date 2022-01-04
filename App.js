import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styles from "./style/mainStyle";
import Home from "./app/screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./app/navigation/Navigation";
//
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
