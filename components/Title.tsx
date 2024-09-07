import React from "react";
import { Text  } from "react-native";
import { TitleProps } from "../types/index";

const Title = ({ style, text }: TitleProps) => {
  return <Text className={`text-2xl text-[#4681A3] font-bold ${style}`}>{text}</Text>;
};

export default Title;


