import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({ lesson, currentProgress, onPress }) {
  const lessonLocked = lesson.id > currentProgress.lessonId;

  return (
    <TouchableOpacity 
      style={styles.contentContainer} 
      onPress={onPress} 
      disabled={lessonLocked}
    >
      <View style={styles.card}>
        {lessonLocked && (
          <View style={styles.lockOverlay}>
            <MaterialCommunityIcons name="lock" size={30} color="#fff" />
          </View>
        )}
        <View style={styles.imageContainer}>
          <Image source={lesson.animationPath} style={styles.image} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text 
          style={styles.title}
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          Part {lesson.id}. {lesson.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
  },
  card: {
    width: 145,
    minHeight: 'fit-content',
    padding: 13,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    position: 'relative',
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
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 15,
    width: 115,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    flexShrink: 1,
  },
});
