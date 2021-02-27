import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { ListItemSeparator, ListItems } from "../components/lists";
import routes from "../navigation/routes";

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
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
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
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.iconName}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              showChevron
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View>
        <ListItems
          title="Log Out"
          ImageComponent={
            <Icon backgroundColor={colors.lightyellow} name="logout" />
          }
          onPress={() => navigation.navigate("Logout")}
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
