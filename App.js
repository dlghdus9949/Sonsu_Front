import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { customFonts } from "./src/constants/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "PretendardVariable", fontSize: 20 }}>
        안녕하세요, PretendardVariable 입니다!
      </Text>
      <Text style={{ fontFamily: "RixInooAriDuriRegular", fontSize: 20 }}>
        안녕하세요, RixInooAriDuriRegular 입니다!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
