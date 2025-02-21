import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";
import { StyleSheet, View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

// 원형차트
const firstValue = 20;
const secondValue = 100 - firstValue;
const data = [
  { value: firstValue, color: "#FFCA1A" },
  { value: secondValue, color: "#e0e0e0" },
];

const PieChart = () => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>나의 주간 순위</Text>
      <View style={styles.PieWrap}>
        <PieChart
          data={data}
          donut={true} // Donut 형태로 차트 만들기
          radius={100} // 반지름 크기 조정
          innerRadius={80} // 내부 반지름 크기
          style={[styles.pieChartStyle]} // 배경을 투명하게 설정
          backgroundColor={"#f5f5f5"}
          centerLabelComponent={() => {
            return (
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                상위 {firstValue}%
              </Text>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PieWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  pieChartStyle: {
    marginTop: 20,
  },
});

export default PieChart();
