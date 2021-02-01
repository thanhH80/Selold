import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";
function PickerItems({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItems;
