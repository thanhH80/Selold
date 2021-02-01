import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// dat ten gi cung duoc
import defaultStyles from "../config/styles";

function AppTextInput({ iconName, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {iconName && (
        <MaterialCommunityIcons
          color={defaultStyles.colors.medium}
          name={iconName}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, { flex:1}]}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    height: 50,
    marginVertical: 10,
    padding: 15,
    
  },
  icon: {
    justifyContent: "center",
    marginRight: 10,
  },
});

export default AppTextInput;
