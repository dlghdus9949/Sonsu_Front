import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Bottom Tab 사용
import Main from "./src/screens/Main";
import Classroom from "./src/screens/Classroom/Classroom";
import CategoryTab from './src/components/CategoryTab';

const Tab = createBottomTabNavigator(); // Tab Navigator 생성

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarActiveTintColor: '#007BFF', // 탭 활성화 색
          tabBarInactiveTintColor: '#808080', // 탭 비활성화 색
          tabBarStyle: { backgroundColor: '#fff' }, // 탭 바 스타일
        }}
      >
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Classroom" component={Classroom} />
        <Tab.Screen name="CategoryTab" component={CategoryTab} />
      </Tab.Navigator>
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