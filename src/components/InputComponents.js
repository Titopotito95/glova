import { Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { brandColor } from "../utils/colors";

export const TextInput = ({ placeholder, value }) => {
  return (
    <Input
      style={styles.textInput}
      placeholder={placeholder}
      textStyle={styles.textInputStyle}
      value={value}
    />
  );
};

export const TextAreaInput = ({ placeholder, value }) => {
  return (
    <Input
      style={{ ...styles.textArea }}
      placeholder={placeholder}
      textStyle={styles.textAreaStyle}
      value={value}
      multiline
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#FDD8D8",
    borderWidth: 2,
  },
  textArea: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#FDD8D8",
    borderWidth: 2,
  },
  textAreaStyle: {
    paddingVertical: 10,
    minHeight: 100,
  },
  textInputStyle: {
    paddingVertical: 10,
  },
});
