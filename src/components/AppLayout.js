import { Layout } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import HeaderBar from "./HeaderBar";

export default function AppLayout({ children }) {
  return (
    <Layout style={{ height: "100%" }}>
      <HeaderBar />
      {children}
    </Layout>
  );
}
