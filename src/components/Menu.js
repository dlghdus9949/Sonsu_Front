import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons"; // Entypo 아이콘 불러오기
import Main from "../pages/Main";
import Learning from "../pages/Learning";
import MyPage from "../pages/MyPage";
import { StyleSheet } from "react-native"; // StyleSheet import

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Learning" component={Learning} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default Menu;
