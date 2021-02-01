import React, { useState } from "react";

import ListItemsScreen from "./app/screens/ListItemsScreen";
import ListItemDetailsScreen from "./app/screens/ListItemDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";

import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen"; //dang co van de

export default function App() {
  return <ListingEditScreen />;
}
