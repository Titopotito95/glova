import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CatalogScreen from "../screens/Catalog";
import FoodDetailScreen from "../screens/FoodDetails";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import { SCREENS } from "../utils/screens-path";

const Stack = createNativeStackNavigator();

export default function MainAppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.HOME}
    >
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREENS.CATALOG}
        component={CatalogScreen}
      />
      <Stack.Screen name={SCREENS.FOOD_DETAILS} component={FoodDetailScreen} />
      <Stack.Screen name={SCREENS.USER_PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
