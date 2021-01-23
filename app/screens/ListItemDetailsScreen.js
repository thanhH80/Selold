import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import SellerInfor from "../components/SellerInfor";
import colors from "../config/colors";

function ListItemDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale! </AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <SellerInfor
        title="Hoang Hai thanh"
        subTitle="5 Listings"
        image={require("../assets/my-avt.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
});

export default ListItemDetailsScreen;
