import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListItemsScreen from "../screens/ListItemsScreen";
import ListItemDetailsScreen from "../screens/ListItemDetailsScreen";
import routes from "./routes";

function FeedNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Listing"
        component={ListItemsScreen}
        options={{ headerTitleStyle: { alignSelf: "center" } }}
      />
      <Stack.Screen name="ListingDetails" component={ListItemDetailsScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
