import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { watchPositionAsync, Accuracy } from "expo-location";
import * as Permissions from "expo-permissions";

import Spacer from "../utils/Spacer";
import { Map } from "../components/Map";
import { Container } from "../components/container";
import { ErrorMessage } from "../components/Errors";

const TrackCreateScreen = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const startTracking = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      // status: granted | denied

      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
      }

      // otherwise, all rosey permissions granted so start tracking...
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          console.log({ location });
        }
      );
    } catch (err) {
      setErrorMessage(err);
    }
  };

  useEffect(() => {
    startTracking();
  }, []);

  return (
    <Container>
      <View style={[styles.item, styles.title]}>
        <Text h1>Track Create</Text>
      </View>
      <Map></Map>
      {errorMessage ? (
        <Spacer>
          <ErrorMessage
            message={`Please enable location services. ${errorMessage}`}
          ></ErrorMessage>
        </Spacer>
      ) : null}
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderColor: "#f0f",
    borderWidth: 0
  },
  title: {
    alignSelf: "center",
    justifyContent: "center"
  }
});

export default TrackCreateScreen;
