import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { AttractionDetailsP } from "../../../types/index";

const AttractionDeatails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const item: AttractionDetailsP = JSON.parse(params.item as string);
  const mainImage = item?.images?.length ? item?.images[0] : "";
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images ? item.images.length - slicedImages.length : 0;


  return (
    <SafeAreaView className="m-8">
      <ImageBackground
        resizeMode="cover"
        source={{ uri: mainImage }}
        imageStyle={{ borderRadius: 20 }}
        className="w-full h-[300px] flex flex-col justify-between"
      >
        <View className="w-full flex flex-row justify-between items-center">
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <Image
              source={require("../../../assets/images/back.png")}
              className="w-9 h-9 m-4"
            />
          </Pressable>

          <Pressable hitSlop={8}>
            <Image
              source={require("../../../assets/images/share.png")}
              className="w-9 h-9 m-4"
            />
          </Pressable>
        </View>
        <View className="flex flex-row items-center justify-center rounded-[15px] bg-gray-100 opacity-75 m-4">
          {slicedImages?.map((image, index) => (
            <View key={index}>
              <Image
                source={{ uri: image }}
                className="w-10 h-10 mx-1 m- my-2 rounded-[10px]"
              />
              {diffImages > 0 && index === slicedImages?.length - 1 ? (
                <View className="absolute bg-black bg-opacity-30 w-10 h-10 top-2 left-1 rounded-[10px] flex justify-center items-center">
                  <Text className="text-white font-bold text-xl">{`+${diffImages}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      </ImageBackground>

      <View>
        <Text>{item.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AttractionDeatails;
