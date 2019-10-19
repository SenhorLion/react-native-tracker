import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

const TextButton = ({
  text,
  size = 16,
  color = '#0000ff',
  onPress = () => null,
  children
}) => {
  return (
    <TouchableOpacity style={styles.textButtonContainer} onPress={onPress}>
      {text && <Text  style={{fontSize: size, color}}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default TextButton;
