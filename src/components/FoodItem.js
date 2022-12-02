import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import FlexView from "./utils/FlexView";
import SpacingWrapper from "./utils/SpacingWrapper";
import { brandColor } from "../utils/colors";
import { PrimaryButton } from "./ButtonComponents";

export const FoodItem = ({ img, text, price, kind }) => {
  return (
    <View
      style={{
        minHeight: 300,
        width: "100%",
        maxWidth: 200,
        alignItems: "center",
        borderColor: "#f74",
        borderWidth: 1,
        backgroundColor: "#f7f7f7",
        borderRadius: 30,
        padding: 10,
        marginRight: 25,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: img
              ? img
              : "https://food.shaqexpress.com/img/icons/Breakfast.png",
          }}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <SpacingWrapper
        styles={{
          alignItems: "center",
        }}
      >
        <Text category="h6">{text}</Text>
        <Text category="c1">{kind}</Text>
      </SpacingWrapper>
      <FlexView
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: brandColor.primaryColor, marginRight: 5 }}
          category="h6"
        >
          {price && "$"}
        </Text>
        <Text category="h2">{price}</Text>
      </FlexView>
      <SpacingWrapper>
        <PrimaryButton
          btnstyles={{
            height: 20,
          }}
          text={"Order"}
          onPress={() => console.log("Ordered")}
        />
      </SpacingWrapper>
    </View>
  );
};
