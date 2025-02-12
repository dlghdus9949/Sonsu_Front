import { createComponentForStaticNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ContinueLearning = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>이어서 학습하기</Text>
      <View>
        {/* 왼 */}
        <View></View>
        {/* 오 */}
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
});

export default ContinueLearning;
