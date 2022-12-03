import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();

export default function NavigationIndex() {
  const { user } = useSelector((state) => state);
  return (
    <NavigationContainer>
      {user?.loggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
