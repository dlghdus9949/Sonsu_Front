import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoryTab from '../../components/CategoryTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getBackgroundColor } from '../../../node_modules/@expo/metro-runtime/src/error-overlay/UI/LogBoxStyle';

export default function Classroom() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screenContainer}>
        <Text style={{fontSize: 20, textAlign:'center', marginTop: 16}}>배움터</Text>
        <CategoryTab />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFE694', // 배경색 설정
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'start',
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
});
