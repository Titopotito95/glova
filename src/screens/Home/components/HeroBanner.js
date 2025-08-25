import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { BannerItem } from "../../../components/BannerItem";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_CATALOG } from "../../../utils/screens-path";

const { width } = Dimensions.get('window');

export default function HeroBanner({ list }) {
  const navigation = useNavigation();

  if (!list || list.length === 0) {
    return null;
  }

  return (
    <ScrollView 
      horizontal 
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ height: 200 }}
    >
      {list.map((banner, index) => {
        return (
          <BannerItem
            key={index}
            onPress={() => navigation.navigate(SCREEN_CATALOG)}
            data={banner}
          />
        );
      })}
    </ScrollView>
  );
}