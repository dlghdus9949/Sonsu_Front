import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Header from '../../components/Header';

export default function Review() {
  return (
    <View style={styles.container}>
      <Header color="#FFE694" />

      <Text style={styles.title}>복습</Text>

      <View style={styles.pracView}>
        <View style={styles.card}>
          <Image source={require("../../../assets/images/sonsuModel.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Image source={require("../../../assets/images/SpeedGame.png")} style={styles.icon} />
            <Text style={styles.description}>실시간 게임으로 빠르게 수어 실력을 향상시키세요!</Text>
          </View>
        </View>

        <View style={[styles.card, styles.oxCard]}>
          <View style={styles.textContainer}>
            <Image source={require("../../../assets/images/OXQuiz.png")} style={styles.icon} />
            <Text style={styles.description}>간단하고 재미있게 수어 복습!</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 40,
  },
  pracView: {
    alignItems: 'center',
    marginTop: '6%',
  },
  card: {
    flexDirection: 'row',
    width: 330,
    height: 170,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: '#FF9381',
    marginBottom: 20,
  },
  oxCard: {
    backgroundColor: '#CAD8F7',
  },
  textContainer: {
    justifyContent: 'center',
    width: '70%',
    alignItems: 'center',
  },
  description: {
    fontSize: 11,
    color: '#222',
    textAlign: 'center',
    marginTop: 10,
  },
  icon: {
    width: '60%',
    height: '15%',
  },
  image: {
    width: '23%',
    height: '75%',
  },
});