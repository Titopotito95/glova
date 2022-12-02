import { useNavigation } from "@react-navigation/native";
import { Divider, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MenuIcon } from "../../components/MenuIcon";
import HeaderBar from "../../components/HeaderBar";
import AppLayout from "../../components/AppLayout";
import DeliveryLocationBox from "./components/DeliveryLocationBox";
import SpacingWrapper from "../../components/utils/SpacingWrapper";
import HeroBanner from "./components/HeroBanner";
import FoodCategories from "./components/FoodCategories";
import FoodListing from "./components/FoodListing";
import foodList from "../../../content/food-list.json";
import heroList from "../../../content/hero-banner-list.json";
import PictureOfTheDay from "./components/PictureOfTheDay";

export default function HomeScreen() {
  return (
    <AppLayout>
      <ScrollView
        style={{ padding: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <SpacingWrapper marginVertical={0}>
          <DeliveryLocationBox />
        </SpacingWrapper>
        <SpacingWrapper>
          <HeroBanner list={heroList} />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={0}>
          <FoodCategories />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={0}>
          <FoodListing list={foodList} title={"Popular Now"} />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={20}>
          <Divider />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={20}>
          <PictureOfTheDay />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={0}>
          <FoodListing list={foodList} haslocation title={"Near You"} />
        </SpacingWrapper>
      </ScrollView>
    </AppLayout>
  );
}
