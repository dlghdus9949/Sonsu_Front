import React, { useRef, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import DailyCheckIn from "./DailyCheckIn";
import ContinueLearning from "./ContinueLearning";

const BottomSheetComponent = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["38%", "83%"], []);

  return (
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
          {/* 오늘의 출석 */}
          <DailyCheckIn />
          {/* 이어서 학습하기 */}
          <ContinueLearning />
          {/* 복습하기 */}
          <View></View>
          {/* AI가 알려주는 재미있는 수어 이야기 */}
          <View></View>
        </ScrollView>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheet: {
    flexGrow: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
});

export default BottomSheetComponent;
