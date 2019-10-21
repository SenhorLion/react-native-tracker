import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

import { AuthForm } from "../components/forms";
import Spacer from "../utils/Spacer";
import { NavButton } from "../components/Buttons";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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
