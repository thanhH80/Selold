import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  Button,
} from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/background.jpg")}
      style={styles.bgImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttons}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
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
    top: 70,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  logoText: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttons: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
