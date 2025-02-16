import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import BackGround from "../../components/BackGround";

const MyPage = () => {
  return (
    <View style={styles.container}>
      <Header color="#fff"/>
      <BackGround />
      {/* 사용자 프로필 */}
      <View style={styles.Profile}>
        {/* 프로필 이미지 */}
        <View>
          <Image
            source={require("../../../assets/images/sonsuModel.png")}
            style={styles.image}
          />
        </View>
        {/* 오른쪽 .. */}
        <View style={styles.profileContent}>
          <View style={styles.nameContent}>
            <Text style={{ fontSize: 28, fontWeight: "600" }}>OOO</Text>
            <Image
              source={require("../../../assets/images/ProfileEdit.png")}
              style={styles.ProfileEdit}
            />
          </View>
          {/* 랭킹 */}
          <View>
            <Text style={{ fontSize: 12 }}>상위 20%</Text>
          </View>
          {/* 학습 알림 설정 */}
          <TouchableOpacity style={styles.NotificationBtn}>
            <Image
              source={require("../../../assets/images/Bell.png")}
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            <Text style={{ color: "#000", fontSize: 10, textAlign: "center" }}>
              학습 알림 설정
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 랭킹 */}
      <View></View>

      {/* 오답 수어 다시보기 */}
    </View>
  );
};

const styles = StyleSheet.create({
  Profile: {
    flexDirection: "row",
    paddingLeft: "11%",
    paddingTop: "5%",
  },
  profileContent: {
    justifyContent: "space-evenly",
    marginLeft: 15,
  },
  nameContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100, // 크기 증가
    height: 100, // height 추가
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: "50%",
  },
  ProfileEdit: {
    width: 11,
    height: 11,
    resizeMode: "contain",
    marginTop: 5,
    marginLeft: 8,
  },
  NotificationBtn: {
    backgroundColor: "#FFE9DC",
    borderRadius: 10,
    height: 32,
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingLeft: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default MyPage;
