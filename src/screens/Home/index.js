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
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import useGetHerobannersQuery from "../../services/data/home/use-get-herobanners.query";
import useGetCategoryQuery from "../../services/data/home/use-get-categories.query";
import useGetNearUserQuery from "../../services/data/home/use-get-nearyou.query";
import useGetPopularQuery from "../../services/data/home/use-get-popular.query";
import useGetDayPicture from "../../services/data/home/use-get-pictureoftheday.query";
import { useSelector } from "react-redux";
import useGetUserLocation from "../../hooks/useGetUserLocation";
import { useRefetchOnFocus } from "../../hooks/useRefetchOnFocus";

export default function HomeScreen() {
  const { refreshLocation, currentAddress } = useGetUserLocation();

  // mocked json api data
  const heroBannersQuery = useGetHerobannersQuery();
  useRefetchOnFocus(heroBannersQuery.refetch);

  const categoryQuery = useGetCategoryQuery();
  useRefetchOnFocus(categoryQuery.refetch);

  const nearUserQuery = useGetNearUserQuery();
  useRefetchOnFocus(nearUserQuery.refetch);

  const popularQuery = useGetPopularQuery();
  useRefetchOnFocus(popularQuery.refetch);

  const pictureQuery = useGetDayPicture();
  useRefetchOnFocus(pictureQuery.refetch);

  //   useEf

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
          <HeroBanner list={heroBannersQuery.data} />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={0}>
          <FoodCategories data={categoryQuery.data} />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={0}>
          <FoodListing list={popularQuery.data} title={"Popular Now"} />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={20}>
          <Divider />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={20}>
          <PictureOfTheDay data={pictureQuery.data} />
        </SpacingWrapper>
        <SpacingWrapper marginVertical={0}>
          {currentAddress && (
            <FoodListing
              list={nearUserQuery.data}
              haslocation
              title={"Near You"}
              currentAddress={currentAddress}
            />
          )}
        </SpacingWrapper>
      </ScrollView>
    </AppLayout>
  );
}
