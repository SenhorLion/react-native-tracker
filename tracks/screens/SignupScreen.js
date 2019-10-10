import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title="Signin" onPress={() => navigation.navigate('Signin')}>
        Sing in
      </Button>
      <Button title="App" onPress={() => navigation.navigate('mainAppFlow')}>
        Sing in
      </Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
