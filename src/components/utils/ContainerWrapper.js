import React from "react";
import { View } from "react-native";

export default function ContainerWrapper({ children }) {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      {children}
    </View>
  );
}
