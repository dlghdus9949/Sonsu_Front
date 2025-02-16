import { View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // 화면 너비 가져오기

const SpeedBack = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: -1,
  },
  circle: {
    width: width,
    height: width * 1.7,
    backgroundColor: "#FFE694",
    borderRadius: width / 2.3,
  },
});

export default SpeedBack;
