import { Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import Carousel from "pinar";
import { CategoryTag } from "../../../components/CategoryTag";
export default function FoodCategories() {
  let foodList = [
    {
      text: "Burgur",
      img: "https://food.shaqexpress.com/img/icons/Burger.png",
    },
    {
      text: "Pizza",
      img: "https://gustopizz.fr/wp-content/uploads/2021/10/FORESTIERE-300x225.png",
    },
    {
      text: "Drinks",
      img: "https://food.shaqexpress.com/img/icons/ColaCan.png",
    },
    {
      text: "Coffee",
      img: "https://food.shaqexpress.com/img/icons/Coffee.png",
    },
    {
      text: "Fries",
      img: "https://food.shaqexpress.com/img/icons/Fries.png",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text category="h6">Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {foodList.map((item, i) => {
          return <CategoryTag data={item} key={i} />;
        })}
      </ScrollView>
    </View>
  );
}
