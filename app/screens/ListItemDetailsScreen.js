import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import ListItems from "../components/ListItems";
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
        <View style={styles.userContainer}>
          <ListItems
            title="Hoang Hai thanh"
            subTitle="5 Listings"
            image={require("../assets/my-avt.jpg")}
          />
        </View>
      </View>
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
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListItemDetailsScreen;
