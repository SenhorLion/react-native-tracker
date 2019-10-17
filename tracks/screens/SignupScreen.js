import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../utils/Spacer';
import { IconButton } from '../components/Buttons';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordIcon = showPassword ? 'eye' : 'eye-slash';

  console.log('@showPassword', showPassword);

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

        <Spacer />

        <Button style={styles.buttonSignup} title="Sign Up"></Button>
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
