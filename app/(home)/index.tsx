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
    <SafeAreaView className="m-[32px] flex-1">
      <FlatList
        data={data}
        numColumns={2}
        // style={{flexGrow: 1}}
        className="flex-grow"
        keyExtractor={(item) => String(item?.id)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Text className="text-[#4681a3] text-[32px]">Where do</Text>
            <Text className="text-[#4681a3] text-[32px] font-bold">
              you want to go?
            </Text>
            <View className="mt-[10%]">
              <Text className="font-bold text-[23px]">Explore Attractions</Text>
            </View>
            <Category />
          </>
        }
        renderItem={({ item, index }) => (
          <AttractionCard
            key={item.id}
            // style={
            //   index % 2 === 0
            //     ? { marginRight: 12, marginLeft: 32 }
            //     : { marginRight: 32 }
            // }
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : ""}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default index;

