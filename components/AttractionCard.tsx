import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface AttractionCardProps {
  title: string;
  subtitle: string;
  variant: { marginRight: number; marginLeft?: number };
  imageSrc: string;
  onPress: () => void; 

}

const AttractionCard = ({ imageSrc, title, subtitle, variant, onPress }: AttractionCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={`p-2 border border-[#E2E2E2] rounded-[15px] mt-4 mr-3 ${variant}`}>
      <Image source={{ uri: imageSrc}} className="w-40 h-40 rounded-lg"  />
      <Text className='text-[12px] font-medium mt-3 ml-1.5'>{title}</Text>
      <View className='mb-3 ml-1.5 mt-1 flex flex-row items-center'>
        <Image className='w-[10px] h-[10px] mr-1.5' source={require("../assets/images/location.png")} />
        <Text className='text-[10px] font-light text-black/50'>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AttractionCard

const styles = StyleSheet.create({})




