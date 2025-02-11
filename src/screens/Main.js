import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Menu from "../components/Menu";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["38%", "38%", "93%"], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* 노랑배경 */}
        <View style={styles.Model}>
          <Text style={styles.textYellow}>안녕하세요, OO님!</Text>
          <Image
            source={require("../../assets/images/sonsuModel.png")}
            style={styles.sonsuModel}
          />
          <TouchableOpacity style={styles.LearnBtn}>
            <Text style={styles.LearnBtnText}>배움터</Text>
          </TouchableOpacity>

          {/* 하얀배경 */}
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            style={styles.sheet}
            backgroundStyle={{ backgroundColor: "#f5f5f5" }}
          >
            <BottomSheetView style={styles.whiteContainer}>
              <Text>안녕</Text>
            </BottomSheetView>
          </BottomSheet>
        </View>
        <Menu />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE694",
  },
  Model: {
    height: "100%",
    top: "10%",
    alignItems: "center",
  },
  textYellow: {
    fontSize: 32,
  },
  sonsuModel: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  LearnBtn: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 15,
    marginTop: -15,
    marginBottom: 15,
    width: "50%",
    // iOS 그림자 효과
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // 안드로이드 그림자 효과
    elevation: 5,
  },
  LearnBtnText: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: "grey",
    // justifyContent: "center",
    // alignContent: "center",
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default Main;
