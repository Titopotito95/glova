import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import { brandColor } from "../utils/colors";
import { PrimaryButton } from "./ButtonComponents";

export const BannerItem = ({ data, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: data?.bgColor,
        height: "100%",
        borderRadius: 10,
        padding: 0,
        marginHorizontal: 10,
        position: "relative",
      }}
    >
      <Image
        source={{
          uri: data?.img
            ? data?.img
            : "https://food.shaqexpress.com/img/icons/Breakfast.png",
        }}
        resizeMode="cover"
        style={{
          height: 120,
          width: 120,
          position: "absolute",
          right: 10,
          bottom: 40,
        }}
      />
      <View
        style={{
          width: "60%",
          marginVertical: 40,
          paddingLeft: 10,
          position: "absolute",
          bottom: 20,
          left: 20,
        }}
      >
        <Text category="h4" style={{ color: data?.color }}>
          {data?.title}
        </Text>
        <View style={{ marginVertical: 10 }}>
          <PrimaryButton
            btnstyles={{
              height: 30,
              width: 150,
              backgroundColor: data?.btnColor ?? brandColor.primaryColor,
              borderColor: data?.btnColor ?? brandColor.primaryColor,
            }}
            onPress={onPress}
            text={data?.btnText ?? "Learn more"}
          />
        </View>
      </View>
    </View>
  );
};
