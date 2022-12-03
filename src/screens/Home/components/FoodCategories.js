import { Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import Carousel from "pinar";
import { CategoryTag } from "../../../components/CategoryTag";
export default function FoodCategories({ data }) {
  return (
    <View style={{ padding: 10 }}>
      <Text category="h6">Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.map((item, i) => {
          return <CategoryTag data={item} key={i} />;
        })}
      </ScrollView>
    </View>
  );
}
