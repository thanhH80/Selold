import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";

import ListItems from "../components/ListItems";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    id: "1",
    icon: {
      iconName: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    title: "My Listings",
  },
  {
    id: "2",
    icon: {
      iconName: "email",
      backgroundColor: colors.secondary,
    },
    title: "My Messages",
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          image={require("../assets/my-avt.jpg")}
          title="Hoang Hai Thanh"
          subTitle="hhthanh.mta@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(menuItems) => menuItems.id}
          data={menuItems}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponent={
                <AppIcon
                  name={item.icon.iconName}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View>
        <ListItems
          title="Log Out"
          ImageComponent={
            <AppIcon backgroundColor={colors.lightyellow} name="logout" />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
