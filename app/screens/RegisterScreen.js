import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

function RegisterScreen(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(8).required("Please enter your name!"),
    email: Yup.string().email().required("Please enter your email!"),
    password: Yup.string().min(6).required("Please enter your password"),
  });
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(item) => console.log(item)} //this is onPress event
      >
        {/* AppFormField has all props of AppTextInput and has errorMessage */}
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          iconName="email"
          name="email"
          placeholder="Email"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          iconName="lock"
          name="password"
          placeholder="Password"
        />
        {/* Already handel submit, so dont need onPress event */}
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 250,
    height: 80,
    marginVertical: 50,
    alignSelf: "center",
  },
});
export default RegisterScreen;
