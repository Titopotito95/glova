import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginIndex from "../screens/Login";
import { SCREEN_LOGIN } from "../utils/screens-path";
const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_LOGIN} component={LoginIndex} />
    </Stack.Navigator>
  );
}
