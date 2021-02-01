import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import defaultStyles from "../../config/styles";
import Text from "../Text";
function ListItems({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  showChevron,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {ImageComponent}
          {/* this style will be called if add an image */}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.detailContainer}>
            <Text numberOfLine={20} style={styles.title}>
              {title}
            </Text>
            {subTitle && (
              <Text numberOfLine={20} style={styles.subTitle}>
                {subTitle}
              </Text>
            )}
          </View>
          {showChevron ? (
            <MaterialCommunityIcons
              color={defaultStyles.colors.medium}
              name="chevron-right"
              size={20}
            />
          ) : null}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  detailContainer: {
    flex: 1,
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
    color: defaultStyles.colors.medium,
  },
});

export default ListItems;
