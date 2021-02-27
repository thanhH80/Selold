import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

/**
 * @description This component is used for upload an image from device's libary
 * @param imgUri Uri of image
 * @param onChangeImage An event for load image
 */
function ImageInput({ imgUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need allow permission!");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri); //recived an img uri
    } catch (error) {
      alert("Erorr upload image ", error);
    }
  };

  function handelPress() {
    if (!imgUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  }
  return (
    <TouchableWithoutFeedback onPress={handelPress}>
      <View style={styles.container}>
        {!imgUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imgUri && <Image source={{ uri: imgUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
