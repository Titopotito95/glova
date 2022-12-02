import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SCREEN_HOME, SCREEN_MAIN_APP } from "../utils/screens-path";
import { MenuIcon } from "./MenuIcon";
import SpacingWrapper from "./utils/SpacingWrapper";

export default function HeadTtitle({ title, redirectTo }) {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <SpacingWrapper>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_HOME)}>
              <MenuIcon name={"chevron-back-outline"} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text category="h5">{title}</Text>
          </View>
        </View>
      </SpacingWrapper>
    </View>
  );
}
