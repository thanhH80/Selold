import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView source={require("../assets/animations/loader.json")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default ActivityIndicator;
