// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import LoginIndex from "./src/screens/Login";
import { getStatusBarHeight } from "react-native-status-bar-height";
import NavigationIndex from "./src/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

const statusBarHeight = getStatusBarHeight();
const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <View style={styles.container}>
            <StatusBar style="dark" />
            <NavigationIndex />
          </View>
        </ApplicationProvider>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
