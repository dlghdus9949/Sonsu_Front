import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import classData from '../../../utils/ClassData';
import { MaterialCommunityIcons } from '@expo/vector-icons';  // 잠금 아이콘을 위해 추가

export default function CategoryTab() {
  const [selectedLevel, setSelectedLevel] = useState('초급');
  const [completedLessons, setCompletedLessons] = useState({
    초급: 3,  // 예시로 진행한 강의 개수 (3까지 들었다고 가정)
    중급: 0,
    고급: 0,
  });

  // 레벨별 색상 매핑
  const levelColors = {
    '초급': '#39B360',
    '중급': '#487BCD',
    '고급': '#FF9381'
  };

  const renderCategoryButtons = () => (
    <View style={styles.categoryContainer}>
      {['초급', '중급', '고급'].map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.categoryButton,
            selectedLevel === level && styles.selectedCategory,
          ]}
          onPress={() => setSelectedLevel(level)}
        >
          <View style={styles.textWrapper}>
            <Text
              style={[
                styles.categoryText,
                selectedLevel === level && styles.selectedCategoryText,
              ]}
            >
              {level}
            </Text>
            {selectedLevel === level && (
              <View 
                style={[
                  styles.indicator,
                  { backgroundColor: levelColors[level] }
                ]} 
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const lessons = classData[selectedLevel] || [];

  // 진행한 강의 수와 총 강의 수
  const totalLessons = lessons.length;
  const completed = completedLessons[selectedLevel] || 0;

  return (
    <SafeAreaView style={styles.container}>
      {renderCategoryButtons()}
      <View style={styles.titleTextWrapper}>
        <Text style={styles.titleText}>학습진도</Text>
        <Text style={[styles.titleText, { marginLeft: 12 }]}>
          <Text style={[styles.titleText, { color: levelColors[selectedLevel], fontWeight: 'bold' }]}>
            {completed}
          </Text>
          {' '} / {totalLessons} 강의
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {lessons.map((lesson, index) => (
          <View key={lesson.id} style={styles.contentContainer}>
            <View style={styles.card}>
              {/* 강의가 잠금 상태일 때 오버레이 */}
              {index + 1 > completed && (
                <View style={styles.lockOverlay}>
                  <MaterialCommunityIcons name="lock" size={30} color="#fff" />
                </View>
              )}
              <View style={styles.imageContainer}>
                <Image 
                  source={lesson.animationPath}
                  style={styles.image}
                />
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>Part {lesson.id}. {lesson.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE694',
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryButton: {
    marginRight: 20,
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#666',
  },
  selectedCategoryText: {
    color: '#333',
  },
  textWrapper: {
    alignItems: 'center',
  },
  indicator: {
    marginTop: 5,
    width: 30,
    height: 5,
    borderRadius: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20, 
  },
  contentContainer: {
    flexDirection: 'column',
  },
  card: {
    width: '100%',
    minHeight: 'fit-content',
    padding: 13,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    position: 'relative',  // 잠금 오버레이를 카드 위에 올리기 위해 position 설정
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // 투명한 배경
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 1,  // 잠금 오버레이가 가장 위에 오도록 설정
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 115,
    height: 115,
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
  },
});
