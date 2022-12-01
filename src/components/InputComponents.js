import { Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const TextInput = ({placeholder}) => {
  return <Input style={styles.textInput} placeholder={placeholder} textStyle={styles.textInputStyle} />;
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 100
  },
  textInputStyle: {
    paddingVertical: 10,
  },
});
