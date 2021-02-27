import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import userLocation from "../components/hooks/userLocation";

const categories = [
  {
    label: "Cameras",
    value: 1,
    backgroundColor: "#fed330",
    iconName: "camera",
  },
  {
    label: "Furniture",
    value: 2,
    backgroundColor: "#fc5c65",
    iconName: "floor-lamp",
  },
  {
    label: "Clothing",
    value: 3,
    backgroundColor: "#2bcbba",
    iconName: "shoe-heel",
  },
  { label: "Games", value: 4, backgroundColor: "#26de81", iconName: "cards" },
  { label: "Cars", value: 5, backgroundColor: "#fd9644", iconName: "car" },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "#45aaf2",
    iconName: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    iconName: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#6b5b99",
    iconName: "book",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#c6a199",
    iconName: "file",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category").nullable(),
  description: Yup.string().required().label("Description"),
  image: Yup.array().min(1, "Please select at least 1 image"),
});

function ListingEditScreen(props) {
  const location = userLocation();
  return (
    <Screen style={styles.container}>
      <Form
        onSubmit={(item) => console.log(location)}
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: 0,
          category: null,
          description: "",
          image: [],
        }}
      >
        <FormImagePicker name="image" />
        <FormField
          iconName="pencil"
          maxLenght={255}
          name="title"
          placeholder="Title"
          validationSchema={validationSchema}
        />
        <FormField
          iconName="currency-usd"
          name="price"
          maxLenght={8}
          width="40%"
          keyboardType="numeric"
          placeholder="Price"
          validationSchema={validationSchema}
        />
        <FormPicker
          iconName="apps"
          items={categories}
          placeholder="Category"
          numColumns={3}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          width="50%"
        />
        <FormField
          iconName="notebook"
          maxLenght={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
          validationSchema={validationSchema}
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
