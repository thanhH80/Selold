import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listItems = [
  {
    id: 1,
    title: "Red jacket for sales!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch best seller!",
    price: 700,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Couch best seller!",
    price: 700,
    image: require("../assets/couch.jpg"),
  },
];
function ListItemsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        keyExtractor={(listItems) => listItems.id.toString()}
        data={listItems}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
});

export default ListItemsScreen;
