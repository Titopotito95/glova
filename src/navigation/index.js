import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";

const Tab = createBottomTabNavigator();

export default function NavigationIndex() {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <AppNavigation />
    </NavigationContainer>
  );
}
