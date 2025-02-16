import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 아이콘 라이브러리 추가

const Header = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.goBack()}
    >
      <MaterialCommunityIcons 
        name="apple-keyboard-control" // 아이콘 이름
        size={30} // 크기 조정
        color="#fff" // 아이콘 색상
        style={styles.icon} // 회전 스타일 추가
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "15%",
    marginHorizontal: 25,
  },
  icon: {
    transform: [{ rotate: '270deg' }], // 아이콘을 왼쪽으로 90도 회전
  },
});

export default Header;
