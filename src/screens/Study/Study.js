import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function Study() {
  const route = useRoute();
  const { topic, lesson } = route.params; // 전달된 topic 받기
  const navigation = useNavigation();

  // Flask 서버 IP 주소 (로컬 IP로 변경해야 함)
  const serverIP = 'http://192.0.0.2:5001';  // 로컬 네트워크 IP로 변경

  return (
    <SafeAreaView style={styles.container}>
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

      {/* 카메라 비디오 스트리밍 WebView */}
      <View style={styles.cameraFeedContainer}>
      <WebView
        source={{ uri: `${serverIP}/video_feed` }}
        style={styles.cameraFeed}
        javaScriptEnabled={true}   
        domStorageEnabled={true}   
        originWhitelist={['*']}
        startInLoadingState={false} // 로딩 화면 비활성화
        allowsFullscreenVideo={true}
        scrollEnabled={false}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE694',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginTop: 10,
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
  cameraFeed: {
    width: 350,
    height: 250,
    marginTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,  // 둥근 모서리 적용
  },
  cameraFeedContainer: {
    width: 350,
    height: 250,
    marginTop: 20,
    overflow: 'hidden',  // 자식 요소들이 borderRadius를 넘지 않도록 설정
    borderRadius: 10,  // 부모 컨테이너에 동일한 borderRadius 적용
  },
});