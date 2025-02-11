import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import Main from "./src/pages/Main";
import AppPermissions from "./src/pages/AppPermissions";
import PrivacyPolicy from "./src/pages/PrivacyPolicy";
import Classroom from "./src/screens/Classroom/Classroom";
import CategoryTab from './src/components/CategoryTab';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AppPermissions" component={AppPermissions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Classroom" component={Classroom} />
        <Stack.Screen name="CategoryTab" component={CategoryTab} />
      </Stack.Navigator>
      <StatusBar style="auto" />  
    </NavigationContainer>
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