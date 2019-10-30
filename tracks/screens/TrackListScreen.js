import React, { useContext, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Text, ListItem } from "react-native-elements";
import { NavButton } from "../components/Buttons";
import { Container } from "../components/container";
import { Context as TrackContext } from "../context/TrackContext";
import screenStyles from "./styles";

// TODO: The token here (and logged)  causes a Invariant Violation: Objects are not valid as a React child (found: object with keys {_40, _65, _55, _72}).
// If you meant to render a collection of children, use an array instead.
// const token =  await AsyncStorage.getItem('token');
// console.log('my user token', token)

const TrackListScreen = ({ navigation }) => {
  const { state, getTracks } = useContext(TrackContext);

  return (
    <Container>
      <NavigationEvents onWillFocus={getTracks}></NavigationEvents>

      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", {
                  _id: item._id
                })
              }
            >
              <ListItem chevron title={item.name}></ListItem>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </Container>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks"
  };
};

export default TrackListScreen;
