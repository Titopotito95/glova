import { Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import FlexView from "./utils/FlexView";

export function LocationView(title) {
  return (
    <FlexView
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text category="h6">{title}</Text>
        <Text category="c1">AE7 Abakaliki Street</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text category="c2">Change</Text>
        </TouchableOpacity>
      </View>
    </FlexView>
  );
}
