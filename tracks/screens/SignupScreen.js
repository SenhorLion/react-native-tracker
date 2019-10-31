import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

import { AuthForm } from "../components/forms";
import Spacer from "../utils/Spacer";
import { NavButton } from "../components/Buttons";
import { Container } from "../components/container";

// TODO: SignupScreen Screen:
// 1. Style up to make it look great
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessages } = useContext(AuthContext);

  return (
    <Container>
      <NavigationEvents onWillBlur={clearErrorMessages}></NavigationEvents>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <Spacer>
        <NavButton
          text="Already signed up? Sign in here"
          routeName="Signin"
          size={24}
        ></NavButton>
      </Spacer>
    </Container>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#ff0000"
  }
});

export default SignupScreen;
