import { Avatar, Divider, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import ContainerWrapper from "../../components/utils/ContainerWrapper";
import SpacingWrapper from "../../components/utils/SpacingWrapper";
import { TextAreaInput, TextInput } from "../../components/InputComponents";
import { PrimaryButton } from "../../components/ButtonComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeadTtitle from "../../components/HeadTtitle";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const { user } = useSelector((state) => state);
console.log(user)
  return (
    <Layout style={{ height: "100%" }}>
      <HeadTtitle title={"Profile"} />
      <KeyboardAwareScrollView>
        <ContainerWrapper>
          <View
            style={{ marginVertical: 10, marginTop: 50, alignItems: "center" }}
          >
            <Avatar
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/D4D35AQErIlL_gTBFsw/profile-framedphoto-shrink_100_100/0/1668153591979?e=1670529600&v=beta&t=U-r1GE7AsapZFLXUFdbT8z69vK3RVAE-CYYtKVKHOeY",
              }}
              size="large"
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                borderWidth: 1,
              }}
            />
            <SpacingWrapper
              styles={{
                alignItems: "center",
              }}
              marginVertical={10}
            >
              <Text category="h6">{user?.profile?.name}</Text>
              <Text category="c1" status="">
                {user?.profile?.status}
              </Text>
            </SpacingWrapper>
          </View>
          <Divider />
          <View
            style={{ padding: 10, backgroundColor: "#FEECEC", height: "100%" }}
          >
            <TextInput value={user?.profile?.name} placeholder={"Name"} />
            <TextInput placeholder={"Email"} value={user?.profile?.email} />
            <TextAreaInput placeholder={"About"} value={user?.profile?.about} />
            <PrimaryButton text={"Update"} />
          </View>
        </ContainerWrapper>
      </KeyboardAwareScrollView>
    </Layout>
  );
}
