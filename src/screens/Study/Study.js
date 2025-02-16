import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import SpeedBack from '../../components/SpeedBack';

export default function Study() {
  const route = useRoute();
  const { topic, lesson } = route.params; // 전달된 topic 받기
  const navigation = useNavigation();

  // Flask 서버 IP 주소 (로컬 IP로 변경해야 함)
  const serverIP = 'http://192.0.0.2:5001';  // 로컬 네트워크 IP로 변경

  const handlePractice = () => {
    console.log("혼자 해보기 버튼 클릭!");
    // 여기에 혼자 연습하는 기능을 추가하면 됨
  };

  return (
    <SafeAreaView style={styles.container}>
      <SpeedBack />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>{"Step "}{lesson.id}. {topic}</Text>
        </View>
      </TouchableOpacity>
      
      <Image
        source={require("../../../assets/images/sonsuModel.png")}
        style={styles.image}
      />

      <View style={styles.desContainer}> 
        <Text style={styles.describe}>1. 오른 손바닥으로 왼 팔등을 스쳐내리세요.</Text>
        <Text style={styles.describe}>2. 두 주먹을 쥐고 바닥이 아래로 향하게 하여 가슴 앞에서 아래로 내려요</Text>
      </View>

      {/* 카메라 비디오 스트리밍 WebView */}
      <View style={styles.cameraFeedWrapperr}>
        <WebView
          source={{ uri: `${serverIP}/video_feed` }}
          style={styles.cameraFeed}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          originWhitelist={['*']}
          startInLoadingState={false}
          allowsFullscreenVideo={true}
          scrollEnabled={false}
        />
      </View>

      {/* 혼자 해보기 버튼 */}
      <TouchableOpacity style={styles.practiceButton} onPress={handlePractice}>
        <Text style={styles.practiceButtonText}>혼자 해보기{"  ->"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '40%',
    height: '35%',
    marginTop: 20,
  },
  desContainer: {
    marginTop: 30,
    width: 330,
  },
  describe:{
    fontSize: 15,
    paddingVertical: 2,
  },
  cameraFeedWrapper: {
    width: 350,
    height: 197,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 40,
  },
  cameraFeed: {
    flex:1,
    backgroundColor: 'transparent',
  },
  practiceButton: {
    marginTop: 30,
    backgroundColor: '#FFE694',
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  practiceButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
