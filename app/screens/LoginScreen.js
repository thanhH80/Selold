import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

//element in shape() must have the same name with inititalValues in Formik
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email!")
    .email()
    .label("Email"), //required(message) => custom error message
  password: Yup.string()
    .required("Please enter your password!")
    .min(4)
    .label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(item) => console.log(item)}
      >
        {/* AppFormField(name, ...otherProps) also has onBlur() and onChangedText() event
              => to Validate form */}
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          iconName="email"
          placeholder="Email"
          name="email"
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          iconName="lock"
          placeholder="Password"
          secureTextEntry={true}
          name="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
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
    marginBottom: 20,
    marginTop: 50,
    alignSelf: "center",
  },
});

export default LoginScreen;
