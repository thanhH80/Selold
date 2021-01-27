import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

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
];
function ListItemsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        keyExtractor={(listItems) => listItems.id.toString()}
        data={listItems}
        renderItem={({ item }) => (
          <Card
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
    padding: 20,
  },
});

export default ListItemsScreen;
