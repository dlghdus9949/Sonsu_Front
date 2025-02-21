import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ color }) => {
  // 색상을 props로 받음
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons
        name="apple-keyboard-control"
        size={25}
        color={color} // 색상을 props로 설정
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "15%",
    marginHorizontal: 15,
    // borderRadius: 10,
    // padding: 10,
  },
  icon: {
    transform: [{ rotate: "270deg" }],
  },
});

export default Header;
