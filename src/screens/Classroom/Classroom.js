import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoryTab from './CategoryTab';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Classroom() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>배움터</Text>
        <CategoryTab />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFE694',
  },
  screenContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 16,
  },
});