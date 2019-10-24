import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Map } from "../components/Map";
import { Container } from "../components/container";

const TrackCreateScreen = () => {
  return (
    <Container>
      <Text h1>TrackCreateScreen</Text>
      <Map></Map>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
