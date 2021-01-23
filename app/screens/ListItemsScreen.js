import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
function ListItemsScreen(props) {
  return (
    <View style={styles.container}>
      <Card
        title="Red jacket for sales!"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
      <Card
        title="Couch best seller!"
        subTitle="$700"
        image={require("../assets/couch.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default ListItemsScreen;
