import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import ReviewComponent from '../../components/ReviewComponent';
import tailwind from 'tailwind-rn';

export default function Review() {
  return (
    <ScrollView style={tailwind('flex-1 bg-[#f5f5f5]')}>
      <Header color="#FFE694" />

      {/* 복습하기 */}
      <View style={tailwind('flex-row justify-between items-center mt-2 mx-10')}>
        <Text style={tailwind('text-xl font-semibold')}>복습하기</Text>
      </View>

      {/* 스피드 게임 */}
      <View style={[tailwind('flex-row w-fit h-160 mt-5 mr-6 ml-6 justify-between pr-6 items-center bg-red-300 mb-5'), { borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 4, shadowOffset: { width: 2, height: 5 } }]}>
        <View style={[tailwind('w-fit my-10')]}>
          <Image 
            source={require("../../../assets/images/sonsuModel.png")} 
            style={{
              width: 100,
              height: 90,
              resizeMode: 'contain',
            }} 
          />
        </View>
        
        <View style={[tailwind('w-fit items-center')]}>
          <Image 
            source={require("../../../assets/images/SpeedGame.png")} 
            style={{
              width: 150,
              height: 30,
              resizeMode: 'contain'
            }} />
          <Text style={tailwind('w-fit text-center text-gray-800 mt-2 text-sm')}>
            실시간 게임으로 빠르게 수어 복습!
          </Text>
        </View>
      </View>

      {/* OX 퀴즈 */}
      <View style={[tailwind('flex-row w-fit h-160 mr-6 ml-6 justify-between pl-6 items-center bg-blue-200 mb-5'), { borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 4, shadowOffset: { width: -5, height: 2 } }]}>
        <View style={[tailwind('w-fit items-center')]}>
          <Image 
            source={require("../../../assets/images/OXQuiz.png")} 
            style={{
              width: 150,
              height: 30,
              resizeMode: 'contain'
            }} />
          <Text style={tailwind('w-fit text-center text-gray-800 mt-2 text-sm')}>
            간단하고 재미있게 수어 복습!
          </Text>
        </View>

        <View style={[tailwind('w-fit my-10')]}>
          <Image 
            source={require("../../../assets/images/sonsuModel.png")} 
            style={{
              width: 100,
              height: 90,
              resizeMode: 'contain',
            }} 
          />
        </View>
      </View>

      {/* 오답 수어 다시보기 */}
      <View style={tailwind('flex-row justify-between items-center mt-2 mx-10')}>
        <Text style={tailwind('text-xl font-semibold')}>오답 수어 다시보기</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>

      {/* 오답수어 컨텐츠 */}
      <ReviewComponent />

    </ScrollView>
  );
}
