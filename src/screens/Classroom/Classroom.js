import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryTab from '../../components/CategoryTab';

export default function Classroom() {
  return (
    <View>
      <CategoryTab />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
});
