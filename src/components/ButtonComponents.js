import { Button } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Primary Button
export const PrimaryButton = ({ text, btnstyles , onPress}) => {
  return <Button onPress={onPress} style={[styles.basic, btnstyles]}>{text}</Button>;
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
