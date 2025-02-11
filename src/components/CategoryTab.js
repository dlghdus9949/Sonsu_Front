import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Class from '../screens/Classroom/Class';

const categories = ['초급', '중급', '고급'];

export default function CategoryTab() {
  const [selectedCategory, setSelectedCategory] = useState('초급');

  const getBorderBottomColor = (category) => {
    switch (category) {
      case '초급':
        return '#39B360';
      case '중급':
        return '#487BCD';
      case '고급':
        return '#FF9381';
      default:
        return '#39B360';
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item)}
      style={[
        styles.category,
        selectedCategory === item && {
          borderBottomWidth: 3,
          borderBottomColor: getBorderBottomColor(item),
        },
      ]}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />
      <View style={styles.content}>
        <Class level={selectedCategory} /> {/* 선택된 카테고리 props로 전달 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  categoryList: {
    marginBottom: 20,
  },
  category: {
    fontSize: 18,
    marginHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
});
