import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export const ErrorMessage = ({ message }) => {
  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <Text h6 style={{ color: '#ee0000' }}>
        {message}
      </Text>
    </View>
  );
};
