import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { NavButton } from "../components/Buttons";
import { Container } from "../components/container";
import screenStyles from "./styles";

// TODO: The token here (and logged)  causes a Invariant Violation: Objects are not valid as a React child (found: object with keys {_40, _65, _55, _72}).
// If you meant to render a collection of children, use an array instead.
// const token =  await AsyncStorage.getItem('token');
// console.log('my user token', token)

const TrackListScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={[screenStyles.item, screenStyles.title]}>
        <Text h1>Track List</Text>
      </View>

      <NavButton text="Track Detail" routeName="TrackDetail" size={24} />
    </Container>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default TrackListScreen;
