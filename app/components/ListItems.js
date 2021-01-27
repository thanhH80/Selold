import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
function ListItems({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {/* this style will be called if add an image */}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.detailContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    textTransform: "capitalize",
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium,
  },
});

export default ListItems;
