import { Button, Spinner, Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Primary Button
export const PrimaryButton = ({ text, btnstyles, onPress, loading }) => {
  if (loading) {
    return (
      <View style={{ alignItems: "center" }}>
        <Spinner status="danger" />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.basic, btnstyles]}>
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};

// Dynamic Social Button
export const SocialButton = ({ icon, color }) => {
  return (
    <TouchableOpacity style={{ ...styles.social, borderColor: color }}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  basic: {
    height: 50,
    borderRadius: 40,
    backgroundColor: "#f66d6d",
    borderColor: "#f66d6d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    // paddingVertical: 10
  },
  social: {
    fontSize: 40,
    backgroundColor: "transparent",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    // padding: 10,
    borderRadius: 100,
  },
});
