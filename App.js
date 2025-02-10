<<<<<<< HEAD
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import Main from "./src/pages/Main";
import AppPermissions from "./src/pages/AppPermissions";
import PrivacyPolicy from "./src/pages/PrivacyPolicy";

const Stack = createStackNavigator();
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { customFonts } from "./src/constants/fonts";
>>>>>>> origin/main

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AppPermissions" component={AppPermissions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
=======
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
>>>>>>> origin/main
