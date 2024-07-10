// 


import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import category from "../constants/categories.json";
import attraction from "../constants/attractions.json";
import { Attraction } from "@/types";
import AttractionCard from "./AttractionCard";

const ALL = "ALL";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState<Attraction[]>([]);

  useEffect(() => {
    setData(attraction);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(attraction);
    } else {
      const filteredData = attraction?.filter((item) =>
        item?.categories?.includes(selectedCategory)
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <View className="mt-[10%]">
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item}
        renderItem={({ item, index }) => {
          const selected = selectedCategory === item;
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              className={`mr-[16px] ${
                selected ? "border-b border-[#4681A3]" : ""
              } `}
            >
              <Text
                className={`mb-1 text-black-50 text-[12px] ${
                  selected ? "text-black" : ""
                } ${index === 0 ? "ml-1" : ""}`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={(<Text className="text-center mt-8 text-sm">No items found</Text>)}
        renderItem={({ item, index }) => (
          <AttractionCard
            key={item.id}
            variant={
              index % 2 === 0
                ? { marginRight: 12, marginLeft: 32 }
                : { marginRight: 32 }
            }
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : ""}
          />
        )}
      />
    </View>
  );
};

export default Category;
