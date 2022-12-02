import React from "react";
import { StyleSheet, View } from "react-native";

export default function FlexView({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
