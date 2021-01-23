import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListItemsScreen from "./app/screens/ListItemsScreen";
import ListItemDetailsScreen from "./app/screens/ListItemDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return <WelcomeScreen />;
}
