import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import classData from '../../../utils/ClassData';

export default function Class({ level }) {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (classData[level]) {
      setLessons(classData[level]);
    }
  }, [level]);

  return (
    <View style={styles.container}>
      {lessons.map((lesson, index) => (
        <View key={index} style={styles.card}>
          <Image source={lesson.animationPath} style={styles.image} />
          <View>
            <Text style={styles.title}>{lesson.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '40%',
    padding: 13,
    marginBottom: 15,
    marginHorizontal: '2%',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
