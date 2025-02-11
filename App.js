import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // ✅ 추가
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Main from "./src/screens/Main";
import Menu from "./src/components/Menu";
import AppPermissions from "./src/screens/AppPermissions";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
import Main from "./src/pages/Main";
import Classroom from "./src/screens/Classroom/Classroom";
import CategoryTab from './src/components/CategoryTab';
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Main} />

          <Stack.Screen name="AppPermissions" component={AppPermissions} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}