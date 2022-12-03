import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SidebarMenu from "../components/SidebarMenu";
import MainAppNavigation from "./MainAppNavigation";
import { SCREENS } from "../utils/screens-path";
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SidebarMenu {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.MAIN_APP}
    >
      <Drawer.Screen name={SCREENS.MAIN_APP} component={MainAppNavigation} />
    </Drawer.Navigator>
  );
}
