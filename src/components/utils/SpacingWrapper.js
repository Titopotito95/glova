import React from "react";
import { View } from "react-native";

export default function SpacingWrapper({ children, marginVertical, styles }) {
  return (
    <View
      style={{
        marginVertical: marginVertical ?? 10,
        ...styles,
      }}
    >
      {children}
    </View>
  );
}
