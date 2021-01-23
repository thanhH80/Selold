import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <MaterialCommunityIcons
          style={styles.closeIcon}
          name="close"
          size={40}
          color="#fff"
        />
        <MaterialCommunityIcons
          style={styles.deleteIcon}
          name="trash-can-outline"
          size={40}
          color="#fff"
        />
      </View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  icons: {
    marginBottom: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

export default ViewImageScreen;
