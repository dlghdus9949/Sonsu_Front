import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={require("../../assets/images/PrevBtn.png")}
        style={styles.image}
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
  image: {
    width: 13, // 크기 증가
    height: 21, // height 추가
    zIndex: 1,
  },
});

export default Header;
