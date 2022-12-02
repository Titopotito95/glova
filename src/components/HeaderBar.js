import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MenuIcon } from "./MenuIcon";
import { DrawerActions } from "@react-navigation/native";
import { brandColor } from "../utils/colors";

export default function HeaderBar() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View
      style={{
        minHeight: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <Text category="s2" style={{ fontSize: 20, color: brandColor.primaryColor }}>
        Glova App
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <MenuIcon size={30} name={"menu-outline"} />
      </TouchableOpacity>
    </View>
  );
}
