import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

import { AuthForm } from "../components/forms";
import Spacer from "../utils/Spacer";
import { NavButton } from "../components/Buttons";
import { NavigationEvents } from "react-navigation";
import { Container } from "../components/container";

// TODO: Signin Screen:
// 1. Style up to make it look great
const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessages } = useContext(AuthContext);

  return (
    <Container>
      <NavigationEvents onWillBlur={clearErrorMessages}></NavigationEvents>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <Spacer>
        <NavButton
          text="Dont have an account? Sign up here"
          routeName="Signup"
          size={24}
        ></NavButton>
      </Spacer>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
