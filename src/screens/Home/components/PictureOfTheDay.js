import { Text } from "@ui-kitten/components";
import React from "react";
import { ImageBackground, View } from "react-native";
import { PrimaryButton } from "../../../components/ButtonComponents";
import SpacingWrapper from "../../../components/utils/SpacingWrapper";

export default function PictureOfTheDay({ data }) {
  if (!data?.img) {
    return;
  }
  return (
    <>
      <ImageBackground
        source={{
          uri: data?.img,
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
