import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const categories = [
  { label: "Camera", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Clothing", value: 3 },
  { label: "Phone", value: 4 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        onSubmit={(item) => console.log(item)}
        validationSchema={validationSchema}
        initialValues={{ title: "", price: 0, category: null, description: "" }}
      >
        <FormField
          maxLenght={255}
          name="title"
          placeholder="Title"
          validationSchema={validationSchema}
        />
        <FormField
          name="price"
          maxLenght={8}
          keyboardType="numeric"
          placeholder="Price"
          validationSchema={validationSchema}
        />
        <Picker items={categories} placeholder="Category" name="category" />
        <FormField
          maxLenght={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
          validationSchema={validationSchema}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
