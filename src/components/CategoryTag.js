import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";

export const CategoryTag = ({ data }) => {
  return (
    <View
      style={{
        height: 50,
        maxWidth: 150,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        marginVertical: 10,
        borderRadius: 50,
        padding: 10,
        marginRight: 15,
        paddingRight: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#f7f7f7",
          marginRight: 15,
        }}
      >
        <Image
          source={{
            uri: data?.img
              ? data?.img
              : "https://food.shaqexpress.com/img/icons/Breakfast.png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Text category="s1" style={{ fontSize: 16 }}>
        {data?.text}
      </Text>
    </View>
  );
};
