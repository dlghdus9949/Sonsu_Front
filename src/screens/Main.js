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

const Main = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["38%", "93%"], []);

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

      {/* BottomSheet을 Model 밖으로 이동 */}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        style={styles.sheet}
        backgroundStyle={{ backgroundColor: "#f5f5f5" }}
        enablePanDownToClose={false}
      >
        <BottomSheetView style={styles.whiteContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sheetText}>안녕</Text>
            <Text style={styles.sheetText}>스크롤이 가능합니다!</Text>
            <Text style={styles.sheetText}>추가 내용을 넣어보세요.</Text>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>

      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
  sheet: {
    flexGrow: 1,
    borderRadius: 30,
  },
  whiteContainer: {
    borderRadius: 100,
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
  },
  sheetText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Main;
