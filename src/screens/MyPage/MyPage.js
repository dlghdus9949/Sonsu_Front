import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import BackGround from "../../components/BackGround";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";

const userRank = [
  { rank: 1, name: "김정이", nickname: "교수님", progress: 90 },
  { rank: 2, name: "이호연", nickname: "성결대", progress: 76 },
  { rank: 3, name: "최유정", nickname: "성결대", progress: 68 },
  // 다른 사용자 데이터를 추가
];

const MyPage = () => {
  return (
    <View>
      <Header color="#fff" />
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
      {/* 탭 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingHorizontal: 30,
          marginTop: 25,
        }}
      >
        {/* 출석체크 */}
        <View style={styles.tabContent}>
          <Text style={{ fontSize: 12 }}>출석체크</Text>
          <FontAwesome6
            name="calendar-check"
            size={24}
            color="black"
            style={{ marginTop: 3 }}
          />
        </View>
        {/* 수어 다시보기 */}
        <View style={styles.tabContent}>
          <Text style={{ fontSize: 12 }}>수어 다시보기</Text>
          <FontAwesome5
            name="handshake"
            size={24}
            color="black"
            style={{ marginTop: 3 }}
          />
        </View>
        {/* 주간 리포트 */}
        <View style={styles.tabContent}>
          <Text style={{ fontSize: 12 }}>출석체크</Text>
          <FontAwesome6
            name="calendar-check"
            size={24}
            color="black"
            style={{ marginTop: 3 }}
          />
        </View>
      </View>

      <ScrollView style={styles.contentWrap}>
        {/* 주간 랭킹 */}
        <View style={styles.rankContainer}>
          <Text style={styles.title}>주간 랭킹</Text>
          {userRank.map((user, index) => (
            <View key={index} style={styles.rankWrap}>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  alignItems: "baseline",
                }}
              >
                <Text
                  style={[
                    styles.userRank,
                    { color: user.rank === 1 ? "#FFCA1A" : "#000" },
                  ]}
                >
                  {user.rank}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginRight: 4,
                    fontWeight: 500,
                  }}
                >
                  {user.name}
                </Text>
                <Text style={{ fontSize: 10 }}>{user.nickname}</Text>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.barBackground}>
                  <View
                    style={[styles.progress, { width: `${user.progress}%` }]}
                  ></View>
                  {/* 사용자의 진행도에 따라 바의 너비를 설정 */}
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* 오답 수어 다시보기 */}
      </ScrollView>
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

    marginTop: 6,
    paddingHorizontal: 20,
    paddingLeft: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  contentWrap: {
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 190,
  },
  tabContent: {
    width: 72,
    height: 72,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // 그림자 색상
    shadowOffset: { width: 0, height: 1 }, // 그림자 오프셋
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 3.5, // 그림자 반경
    elevation: 5, // 안드로이드에서 그림자 효과 적용
  },
  chartContainer: {
    marginTop: 20,
  },
  rankContainer: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: "20",
    marginBottom: "10",
  },

  rankWrap: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1, // 하단 선 두께
    borderBottomColor: "#ccc", // 하단 선 색상
  },
  userRank: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: 700,
    shadowColor: "#000", // 그림자 색상
    shadowOffset: { width: 0, height: 1 }, // 그림자 오프셋
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 3.5, // 그림자 반경
    elevation: 5, // 안드로이드에서 그림자 효과 적용
  },
  progressContainer: {
    marginTop: 10,
    width: "100%",
    shadowColor: "#000", // 그림자 색상
    shadowOffset: { width: 0, height: 1 }, // 그림자 오프셋
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 3.5, // 그림자 반경
    elevation: 5, // 안드로이드에서 그림자 효과 적용
  },
  barBackground: {
    width: "50%", // 바의 너비
    height: 10,
    backgroundColor: "#ebebeb",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#FFCA1A", // 진행도를 나타내는 색상
    borderRadius: 5,
  },
});

export default MyPage;
