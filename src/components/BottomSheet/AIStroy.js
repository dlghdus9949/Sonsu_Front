import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ShortcutButton from "../ShortcutButton";
import Feather from "@expo/vector-icons/Feather";

const AIStroy = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>AI가 알려주는 재미있는 수어 이야기</Text>
        <Feather name="alert-circle" size={20} color="#666666" />
      </View>
      <View style={styles.AItext}>
        <Text>어쩌구저쩌구</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  titleWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
  AItext: {
    backgroundColor: "white",
    height: "50%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
  },
});

export default AIStroy;
