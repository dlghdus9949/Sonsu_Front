import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

const categories = ['초급', '중급', '고급'];

export default function CategoryList() {
  // 초기값을 '초급'으로 설정
  const [selectedCategory, setSelectedCategory] = useState('초급');

  // 카테고리별 밑줄 색을 설정하는 함수
  const getBorderBottomColor = (category) => {
    switch (category) {
      case '초급':
        return '#39B360'; // 초급 선택 시 초록색
      case '중급':
        return '#487BCD'; // 중급 선택 시 파란색
      case '고급':
        return '#FF9381'; // 고급 선택 시 빨간색
      default:
        return '#39B360'; // 기본값은 초록색
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

  const renderContent = () => {
    if (selectedCategory === '초급') {
      return <Text>초급</Text>;
    }
    if (selectedCategory === '중급') {
      return <Text>중급</Text>;
    }
    if (selectedCategory === '고급') {
      return <Text>고급</Text>;
    }
  };

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
        {renderContent()}
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
