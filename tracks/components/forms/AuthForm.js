import React, { useState }from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { IconButton, TextButton } from '../Buttons';
import { ErrorMessage } from '../Errors';
import Spacer from '../../utils/Spacer';

const styles = StyleSheet.create({
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

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordIcon = showPassword ? 'eye-slash' : 'eye';

  return (
    <>
    <View style={[styles.item, styles.title]}>
    <Text h1>{headerText}</Text>
  </View>
  <View style={[styles.item]}>
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

    {errorMessage ? (
      <ErrorMessage message={errorMessage} />
    ) : null}

    
    <Spacer />

    <Button
      style={styles.buttonSignup}
      title={submitButtonText}
      onPress={() => onSubmit({ email, password })}></Button>

      
  </View>
  </>
  )
}

export default AuthForm;