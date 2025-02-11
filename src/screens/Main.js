import { StyleSheet, View, Text, Button } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>메인</Text>
      <Button title="배움터" onPress={() => navigation.navigate('Classroom')} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
});
