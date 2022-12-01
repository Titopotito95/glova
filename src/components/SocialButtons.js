import { Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { SocialButton } from "./ButtonComponents";
import FontAwsome from "react-native-vector-icons/FontAwesome";

export default function SocialButtons() {
  const socialLoginList = [
    {
      icon: <FontAwsome color={"#DB4437"} size={30} name="google-plus" />,
      color: "#DB4437",
    },

    {
      icon: <FontAwsome size={30} name="apple" />,
      color: "black",
    },
    {
      icon: <FontAwsome color={"#4267B2"} size={30} name="facebook-f" />,
      color: "#4267B2",
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {socialLoginList.map((social, index) => {
        return (
          <SocialButton color={social.color} key={index} icon={social.icon} />
        );
      })}
    </View>
  );
}
