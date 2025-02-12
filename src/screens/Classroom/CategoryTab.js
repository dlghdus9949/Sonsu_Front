import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import classData from '../../../utils/ClassData';

export default function CategoryTab() {
  const [selectedLevel, setSelectedLevel] = useState('초급');

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
        </TouchableOpacity>
      ))}
    </View>
  );

  const lessons = classData[selectedLevel] || [];

  return (
    <SafeAreaView style={styles.container}>
      {renderCategoryButtons()}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={styles.cardContainer}>
          {lessons.map((lesson, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image 
                  source={lesson.animationPath}
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{lesson.title}</Text>
              </View>
            </View>
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
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryButton: {
    marginRight: 20,
    paddingVertical: 8,
    position: 'relative',
  },
  selectedCategory: {
    // 선택된 카테고리의 스타일
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
  },
  selectedCategoryText: {
    color: '#333',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  card: {
    width: '46%',
    minHeight: 150,
    padding: 13,
    marginBottom: 15,
    marginHorizontal: '2%',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
