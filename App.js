import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // ✅ 추가
import Login from "./src/screens/Member/Login";
import SignUp from "./src/screens/Member/SignUp";
import Menu from "./src/components/Menu";
import AppPermissions from "./src/screens/Member/AppPermissions";
import PrivacyPolicy from "./src/screens/Member/PrivacyPolicy";
import Classroom from "./src/screens/Classroom/Classroom";
import CategoryTab from "./src/screens/Classroom/CategoryTab";
const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Menu} />
          <Stack.Screen name="AppPermissions" component={AppPermissions} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="Classroom" component={Classroom} />
          <Stack.Screen name="CategoryTab" component={CategoryTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}