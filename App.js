// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import LoginIndex from "./src/screens/Login";
import { getStatusBarHeight } from "react-native-status-bar-height";
import NavigationIndex from "./src/navigation";
const statusBarHeight = getStatusBarHeight();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <NavigationIndex />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
