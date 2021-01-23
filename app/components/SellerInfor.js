import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function SellerInfor({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    textTransform: "capitalize",
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium,
  },
});

export default SellerInfor;
