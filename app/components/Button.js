import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Button({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Button;
