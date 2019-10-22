import React from "react";
import { SafeAreaView, StyleSheet, AsyncStorage } from "react-native";
import { Text } from "react-native-elements";
import { NavButton } from "../components/Buttons";

// TODO: The token here (and logged)  causes a Invariant Violation: Objects are not valid as a React child (found: object with keys {_40, _65, _55, _72}).
// If you meant to render a collection of children, use an array instead.
// const token =  await AsyncStorage.getItem('token');
// console.log('my user token', token)

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text h1>TrackList Screen</Text>

      <NavButton text="Track Detail" routeName="TrackDetail" size={24} />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
