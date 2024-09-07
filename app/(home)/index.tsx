import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { AttractionCard, Category } from "@/components";
import attraction from "../../constants/attractions.json";
import { Attraction } from "@/types";

const index = () => {
  const [data, setData] = useState<Attraction[]>([]);

  useEffect(() => {
    setData(attraction);
  }, []);
  

  return (
    <SafeAreaView className="flex-1 mt-[6%]">
      <View className="p-2">
        <Text className="text-[#4681a3] text-[32px]">Where do jjjjjj</Text>
        <Text className="text-[#4681a3] text-[32px] font-bold">
          you want to go?
        </Text>
        <View className="mt-[4%]">
          <Text className="font-bold text-[23px]">Explore Attractions</Text>
        </View>
      </View>
      <Category />
    </SafeAreaView>
  );
};

export default index;