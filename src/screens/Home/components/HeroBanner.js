import React from "react";
import Carousel from "pinar";
import { BannerItem } from "../../../components/BannerItem";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_CATALOG } from "../../../utils/screens-path";

export default function HeroBanner({ list }) {
  const navigation = useNavigation();

  return (
    <Carousel bounces={true} height={200} showsControls={false}>
      {list?.map((banner, index) => {
        return (
          <BannerItem
            onPress={() => navigation.navigate(SCREEN_CATALOG)}
            data={banner}
            key={index}
          />
        );
      })}
    </Carousel>
  );
}
