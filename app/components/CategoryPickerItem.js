import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import Text from "./Text";

function CategoryPickerItem({ item, onPress }) {
  /**
   * @description: Contain list categories
   * @param: item: is data
   * @event: OnPress
   */
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        {/* Giong voi ten cua data */}
        <Icon
          name={item.iconName}
          backgroundColor={item.backgroundColor}
          size={80}
        />
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
});
export default CategoryPickerItem;
