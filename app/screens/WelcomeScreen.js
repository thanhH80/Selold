import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";

import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/background.jpg")}
      style={styles.bgImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        ></Image>
      </View>
      <View style={styles.buttons}>
        <Button title="Login" />
        <Button title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 150,
  },
  logo: {
    height: 80,
    width: 250,
    marginBottom: 20,
  },
  buttons: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
