import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from '../../utils/Spacer';
import styles from './styles';

const NavButton = ({
  navigation,
  text,
  routeName,
  size = 16,
  color = '#0000ff',
  onPress = () => null,
  children,
}) => {
  return (
    <TouchableOpacity
      style={styles.navButtonContainer}
      onPress={() => navigation.navigate(routeName)}>
      {text && <Text style={{ fontSize: size, color }}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default withNavigation(NavButton);
