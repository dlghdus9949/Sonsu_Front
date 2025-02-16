import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function LessonDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { lesson, title, progress, selectedLevel: initialSelectedLevel } = route.params;

  console.log(lesson);

  const levelColors = {
    '초급': '#39B360',
    '중급': '#487BCD',
    '고급': '#FF9381'
  };

  const [selectedLevel, setSelectedLevel] = useState(initialSelectedLevel); // 파람으로 받은 selectedLevel을 초기값으로 설정

  // lesson.level이 있으면 selectedLevel을 해당 값으로 설정
  useEffect(() => {
    if (lesson.level && lesson.level !== selectedLevel) {
      setSelectedLevel(lesson.level);
    }
  }, [lesson.level, selectedLevel]); // lesson.level이 변경될 때마다 실행

  const isTopicLocked = (topic, index) => {
    if (lesson.id < progress.lessonId) {
      return false;
    } else if (lesson.id === progress.lessonId) {
      const lastCompletedTopicIndex = lesson.topics.findIndex(t => t === progress.lastCompletedTopic);
      return index > lastCompletedTopicIndex;
    }
    return true;
  };

  const renderCategoryButtons = () => (
    <View style={styles.categoryContainer}>
      {['초급', '중급', '고급'].map((level) => (
        selectedLevel === level && (
          <TouchableOpacity
            key={level}
            style={[
              styles.categoryButton,
              selectedLevel === level && styles.selectedCategory, // 활성화된 카테고리 스타일
            ]}
            onPress={() => setSelectedLevel(level)}
          >
            <View style={styles.textWrapper}>
              <Text
                style={[
                  styles.categoryText,
                  selectedLevel === level && styles.selectedCategoryText, // 활성화된 카테고리 텍스트 스타일
                ]}
              >
                {level}
              </Text>
            </View>
            {selectedLevel === level && (
              <View 
                style={[
                  styles.indicator,
                  { backgroundColor: levelColors[level] } // 카테고리별 색상
                ]} 
              />
            )}
          </TouchableOpacity>
        )
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View>
          <Text style={styles.Title}>{"<- Part"} {lesson.id}. {lesson.title}</Text>
        </View>
      </TouchableOpacity>

      {renderCategoryButtons()}

      <View style={styles.titleTextWrapper}>
        <Text style={styles.titleText}>학습진도</Text>
        <Text style={[styles.titleText, { marginLeft: 12 }]}>
          <Text style={[styles.titleText, { color: '#39B360', fontWeight: 'bold' }]}>
            {lesson.id <= progress.lessonId ? 
              lesson.topics.filter((_, index) => !isTopicLocked(_, index)).length : 0}
          </Text>
          {' '} / {lesson.topics.length} 강의
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.rowContainer}>
          {lesson.topics.map((topic, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.contentContainer}
              disabled={isTopicLocked(topic, index)}
            >
              <View style={styles.card}>
                {isTopicLocked(topic, index) && (
                  <View style={styles.lockOverlay}>
                    <MaterialCommunityIcons name="lock" size={30} color="#fff" />
                  </View>
                )}
                <View style={styles.imageContainer}>
                  <Image source={lesson.animationPath} style={styles.image} />
                </View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  Part {index + 1}. {topic}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE694',
  },
  Title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
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
    fontSize: 17,
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
    width: 40,
    height: 5,
    borderRadius: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 15,
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
  },
  contentContainer: {
    flexDirection: 'column',
    width: '42%',
    marginBottom: 10,
  },
  card: {
    width: '100%',
    minHeight: 'fit-content',
    padding: 15,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 1,
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
  backButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
