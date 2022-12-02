import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Carousel from "pinar";
import SpacingWrapper from "../../../components/utils/SpacingWrapper";
import { FoodItem } from "../../../components/FoodItem";
import { LocationView } from "../../../components/LocationView";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_FOOD_DETAILS } from "../../../utils/screens-path";
export default function FoodListing({ title, list, haslocation }) {
  const LocationTitleView = LocationView(title);

  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <SpacingWrapper marginVertical={10}>
        {haslocation ? (
          LocationTitleView
        ) : (
          <View>
            <Text category="h6">{title}</Text>
          </View>
        )}
      </SpacingWrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list?.map((item, i) => {
          return (
            <TouchableOpacity key={i} style={{marginRight: 20}}>
              <FoodItem
                img={item?.img}
                kind={"Cheezy Pizza"}
                text={item?.text}
                price={item?.price}
                data={item}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
