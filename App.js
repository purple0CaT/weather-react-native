import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x= 1
  console.log("Console =>",x)
  return (
    <View style={styles.container}>
      <Text>Mis Karina, ne chvorijte, a to ja chvilujus 🥰</Text>
      <Text> Hey</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
