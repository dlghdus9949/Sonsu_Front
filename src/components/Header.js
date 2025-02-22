import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = ({ color }) => {  // 색상을 props로 받음
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.button}  
      onPress={() => navigation.goBack()}
    >
      <AntDesign 
        name="left" 
        size={24} 
        color={color}  
        style={styles.icon} // 여기에 style 적용
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
    borderRadius: 10,
    padding: 10,
  },
});

export default Header;
