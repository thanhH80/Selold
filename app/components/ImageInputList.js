import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imgUris = [], onAddImg, onRemoveImg }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imgUris.map((uri) => (
            <View style={styles.image}>
              <ImageInput
                key={uri}
                imgUri={uri}
                onChangeImage={() => onRemoveImg(uri)}
              />
            </View>
          ))}

          <ImageInput onChangeImage={(uri) => onAddImg(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
export default ImageInputList;
