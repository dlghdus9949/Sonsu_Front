import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { customFonts } from "../../../src/constants/fonts";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Header from '../../components/Header';

export default function Review() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Header color="#FFE694" />  {/* 아이콘 색상을 #FFE694로 설정 */}

      <View>
        <Text style={styles.Title}>복습하기</Text>
      </View>

      <View style={styles.pracView}>
        <View style={styles.speedView}>
          <Image source={require("../../../assets/images/sonsuModel.png")} style={styles.image} />

          <View style={styles.speedTextContainer}>
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <Text style={styles.speedText}>스피드 게임</Text> // View 제거
            }
          >
            <LinearGradient
              colors={['#FFD700', '#F2F2F2']}
              start={{ x: 0, y: 4 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            />
          </MaskedView>

            <View style={styles.textWrapper}>
              <Text style={styles.speedText2}>실시간 게임으로 빠르게 수어 실력을 향상시키세요!</Text>
            </View>
          </View>
        </View>

        <View style={styles.oxView}>
          <View style={styles.speedTextContainer}>
            <MaskedView
              style={styles.maskedView}
              maskElement={<View><Text style={styles.speedText}>OX 퀴즈</Text></View>} // 텍스트를 마스크로 사용
            >
              <LinearGradient
                colors={['#4495C0', '#80B5D1']} // 그라데이션 색상
                start={{ x: 0.5, y: 0 }} 
                end={{ x: 0, y: 1 }}  // 그라데이션을 수평으로 적용
                style={styles.gradient} // 그라데이션을 텍스트 뒤에 적용
              />
            </MaskedView>

            <View style={styles.textWrapper}>
              <Text style={styles.speedText2}>실시간 게임으로 빠르게 수어 실력을 향상시키세요!</Text>
            </View>
          </View>
          <Image source={require("../../../assets/images/sonsuModel.png")} style={styles.image} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  Title: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 40,
  },
  pracView: {
    alignItems: 'center',
    marginTop: '6%',
  },
  speedView: {
    flexDirection: 'row',
    width: 330,
    height: 180,
    backgroundColor: '#FF9381',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // 그림자 추가
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // Android에서 그림자가 나타나게 하기 위한 설정
  },
  maskedView: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  speedTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '70%',
  },
  textWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  speedText: {
    fontSize: 30,
    fontFamily: 'RixInooAriDuriRegular',
    color: 'white',
    textAlign: 'center',
  },
  speedText2: {
    fontSize: 11,
    fontFamily: 'PretendardValia',
    color: '#222',
    textAlign: 'center',
  },
  image: {
    width: '23%',
    height: '65%',
  },
  oxView: {
    flexDirection: 'row',
    width: 330,
    height: 180,
    backgroundColor: '#CAD8F7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // 그림자 추가
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // Android에서 그림자가 나타나게 하기 위한 설정
  },
});