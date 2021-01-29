import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// dat ten gi cung duoc
import defaultStyles from "../config/styles";

function AppTextInput({ iconName, ...otherProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {iconName && (
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            size={20}
            name={iconName}
          />
        )}
      </View>
      <TextInput
        style={[defaultStyles.text, { flex: 1 }]}
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
    width: "100%",
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    justifyContent: "center",
    marginRight: 10,
  },
});

export default AppTextInput;
