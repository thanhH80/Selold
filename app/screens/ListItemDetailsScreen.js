import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../components/Text";
import { ListItems } from "../components/lists";
import defaultStyles from "../config/styles";

function ListItemDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listing.title} </Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItems
            title="Hoang Hai thanh"
            subTitle="5 Listing(s)"
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
    fontWeight: "500",
  },
  price: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListItemDetailsScreen;
