import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import category from "../constants/categories.json";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <View className="mt-[10%]">
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false} 
        keyExtractor={(item, index) => item}
        renderItem={({ item, index}) => {
          const selected = selectedCategory === item;
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              className={`mr-[16px] ${selected ? "border-b border-[#4681A3]" : ""} `}
            >
              <Text className={`mb-1 text-black-50 text-[12px] ${selected ? "text-black" : ""} ${index === 0 ? "ml-1" : ""}`}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Category;

