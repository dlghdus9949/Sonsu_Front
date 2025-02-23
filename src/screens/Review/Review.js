import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Header from '../../components/Header';

export default function Review() {

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
            <Image source={require("../../../assets/images/SpeedGame.png")} style={styles.speedImage} />
            <View style={styles.textWrapper}>
              <Text style={styles.speedText2}>실시간 게임으로 빠르게 수어 실력을 향상시키세요!</Text>
            </View>
          </View>
        </View>

        <View style={styles.oxView}>
          <View style={styles.speedTextContainer}>
            <Image source={require("../../../assets/images/OXQuiz.png")} style={styles.oxImage} />
            <View style={styles.textWrapper}>
              <Text style={styles.speedText2}> 간단하고 재미있게 수어 복습!</Text>
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
    height: 170,
    backgroundColor: '#FF9381',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
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
    color: '#fff',
    textAlign: 'center',
  },
  speedText2: {
    fontSize: 11,
    color: '#222',
    textAlign: 'center',
  },
  speedImage: {
    width: '80%',
    height: '20%',
  },
  oxImage: {
    width: '70%',
    height: '20%',
  },
  image: {
    width: '23%',
    height: '60%',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});
