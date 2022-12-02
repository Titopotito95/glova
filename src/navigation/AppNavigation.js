import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View } from "react-native";
import HomeScreen from "../screens/Home";
import SidebarMenu from "../components/SidebarMenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainAppNavigation from "./MainAppNavigation";
import { SCREEN_MAIN_APP, SCREEN_USER_PROFILE } from "../utils/screens-path";
import ProfileScreen from "../screens/Profile";
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={SidebarMenu}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREEN_MAIN_APP}
    >
      <Drawer.Screen name={SCREEN_MAIN_APP} component={MainAppNavigation} />
    </Drawer.Navigator>
  );
}
