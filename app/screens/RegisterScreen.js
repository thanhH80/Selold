import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

function RegisterScreen(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(8).required("Please enter your name!"),
    email: Yup.string().email().required("Please enter your email!"),
    password: Yup.string().min(6).required("Please enter your password"),
  });
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(item) => console.log(item)} //this is onPress event
      >
        {/* AppFormField has all props of AppTextInput and has errorMessage */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          iconName="email"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          iconName="lock"
          name="password"
          placeholder="Password"
        />
        {/* Already handel submit, so dont need onPress event */}
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegisterScreen;
