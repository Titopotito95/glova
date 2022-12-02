import { Text } from "@ui-kitten/components";
import React from "react";
import { ImageBackground, View } from "react-native";
import { PrimaryButton } from "../../../components/ButtonComponents";
import SpacingWrapper from "../../../components/utils/SpacingWrapper";

export default function PictureOfTheDay() {
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/f8/f2/69/f8f269f64027d5da3f52fc10cd31d34b.jpg",
        }}
        resizeMode="cover"
        style={{
          minHeight: 300,
          padding: 10,
        }}
        imageStyle={{
          borderRadius: 20,
          resizeMode: "cover",
        }}
      ></ImageBackground>
    </>
  );
}
