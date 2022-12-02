import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CatalogScreen from "../screens/Catalog";
import FoodDetailScreen from "../screens/FoodDetails";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import {
  SCREEN_CATALOG,
  SCREEN_FOOD_DETAILS,
  SCREEN_HOME,
  SCREEN_USER_PROFILE,
} from "../utils/screens-path";

const Stack = createNativeStackNavigator();

export default function MainAppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREEN_HOME}
    >
      <Stack.Screen name={SCREEN_HOME} component={HomeScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_CATALOG}
        component={CatalogScreen}
      />
      <Stack.Screen name={SCREEN_FOOD_DETAILS} component={FoodDetailScreen} />
      <Stack.Screen name={SCREEN_USER_PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
