import React, {  useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';


import { AuthForm } from '../components/forms';
import Spacer from '../utils/Spacer';
import { TextButton } from '../components/Buttons';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);


  return (
    <SafeAreaView style={styles.container}>
 <AuthForm
 headerText = "Sign Up for Tracker"
 errorMessage ={state.errorMessage}
 onSubmit={signup} 
 submitButtonText = "Sign Up"
 />


 <TextButton text="Already signed up? Signin here =>" size={24} onPress={() => navigation.navigate('Signin')}></TextButton>

      <View style={[styles.item, { flex: 2 }]}></View>
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    borderWidth: 0,
    borderColor: '#ff00ff',
  },
  
});

export default SignupScreen;
