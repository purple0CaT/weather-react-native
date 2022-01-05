import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MyTabs from "./app/components/navigation/Navigation";
import { configureStore, persistor } from "./app/redux/store/store";
import styles from "./style/mainStyle";
//
export default function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
