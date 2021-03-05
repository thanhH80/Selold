import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

function UploadScreen({ visible = false, progress = 0 }) {
  return (
    <Modal>
      <View style={styles.container}>
        <Progress.Bar
          width={300}
          color={colors.primary}
          progress={progress * 100}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default UploadScreen;
