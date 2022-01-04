import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import MyTabs from "./app/navigation/Navigation";
import styles from "./style/mainStyle";
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
