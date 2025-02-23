import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Card from './Card';
import classData from '../../utils/ClassData';

export default function ReviewCard() {
  // 초급, 중급, 고급에서 하나씩 선택
  const beginnerLesson = classData.초급[0]; // 초급 첫 번째
  const intermediateLesson = classData.중급[0]; // 중급 첫 번째
  const advancedLesson = classData.고급[0]; // 고급 첫 번째

  // 선택된 데이터를 Card 컴포넌트에 전달
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <Card lesson={beginnerLesson} currentProgress={{ lessonId: 1 }} onPress={() => {}} />
        <Card lesson={intermediateLesson} currentProgress={{ lessonId: 2 }} onPress={() => {}} />
        <Card lesson={advancedLesson} currentProgress={{ lessonId: 3 }} onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    width: '100%',
  },
});
