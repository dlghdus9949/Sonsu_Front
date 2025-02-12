import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "../components/BottomSheet/BottomSheet";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Model}>
        <Text style={styles.textYellow}>안녕하세요, OO님!</Text>
        <Image
          source={require("../../assets/images/sonsuModel.png")}
          style={styles.sonsuModel}
        />
        <TouchableOpacity style={styles.LearnBtn}>
          <Text style={styles.LearnBtnText}>배움터</Text>
        </TouchableOpacity>
      </View>

      {/* BottomSheet 컴포넌트 호출 */}
      <BottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE694",
  },
  Model: {
    flex: 1,
    top: "10%",
    alignItems: "center",
  },
  textYellow: {
    fontSize: 32,
  },
  sonsuModel: {
    width: "40%",
    height: "40%",
    resizeMode: "contain",
  },
  LearnBtn: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 15,
    marginTop: -15,
    marginBottom: 15,
    width: "50%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  LearnBtnText: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Main;
