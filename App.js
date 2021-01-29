import React, { useState } from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

// import AppText from "./app/components/AppText";
// import AppButton from "./app/components/AppButton";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListItemsScreen from "./app/screens/ListItemsScreen";
import ListItemDetailsScreen from "./app/screens/ListItemDetailsScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";

import AppTextInput from "./app/components/AppTextInput";
import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category} // item is selected
        onSelectedItem={(item) => setCategory(item)}
        items={categories}
        iconName="apps"
        placehoder="Category"
      />
      <AppTextInput iconName="email" placeholder="Email" />
    </Screen>
  );
}
