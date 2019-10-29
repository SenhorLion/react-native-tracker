import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Container } from "../components/container";
import screenStyles from "./styles";

const TrackDetailScreen = () => {
  return (
    <Container>
      <View style={[screenStyles.item, screenStyles.title]}>
        <Text h1>Track Detail</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
