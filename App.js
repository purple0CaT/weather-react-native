import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Mis Karina, ne chvorijte, a to ja chvilujus 🥰</Text>
      <Text>Touchable no feedback</Text>
      <TouchableWithoutFeedback onPress={() => alert("Without feedback!")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 150,
          }}
        />
      </TouchableWithoutFeedback>
      <Text>Touchable feedback</Text>
      <TouchableOpacity onPress={() => alert("With feedback!")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 300,
            height: 150,
          }}
        />
      </TouchableOpacity>
      <Text> Bottom</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3",
    alignItems: "center",
    justifyContent: "center",
  },
});
