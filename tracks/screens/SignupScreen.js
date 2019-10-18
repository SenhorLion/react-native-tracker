import React, { useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../utils/Spacer';
import { IconButton } from '../components/Buttons';
import { ErrorMessage } from '../components/Errors';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordIcon = showPassword ? 'eye' : 'eye-slash';

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.item, styles.title]}>
        <Text h1>Sign Up</Text>
      </View>
      <View style={[styles.item, { flex: 2 }]}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}></Input>
        <Spacer />

        <Input
          label="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          rightIcon={
            <IconButton
              iconName={passwordIcon}
              size={24}
              color="#000"
              onPress={() => setShowPassword(!showPassword)}
            />
          }></Input>

        {state.errorMessage ? (
          <ErrorMessage message={state.errorMessage} />
        ) : null}
        <Spacer />

        <Button
          style={styles.buttonSignup}
          title="Sign Up"
          onPress={() => signup({ email, password })}></Button>
      </View>

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
  item: {
    flex: 1,
    padding: 10,
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  buttonSignup: {
    marginTop: 40,
    width: 200,
  },
});

export default SignupScreen;
