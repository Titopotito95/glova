import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import foodlist from "../../../content/food-list.json";
import { FoodItem } from "../../components/FoodItem";
import { TextInput } from "../../components/InputComponents";
export default function CatalogScreen() {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            padding: 20,

          }}
        >
            <TextInput placeholder={'Search here ...'} />
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-around' }}>
          {foodlist.map((item, index) => {
            return (
              <View key={index} style={{ width: "48%", marginBottom: 10 }}>
                <FoodItem
                  img={item?.img}
                  price={item?.price}
                  text={item?.text}
                  kind={item?.kind}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Layout>
  );
}
