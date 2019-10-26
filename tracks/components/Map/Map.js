import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as LocationContext } from "../../context/LocationContext";

const Map = () => {
  const { state } = useContext(LocationContext);

  console.log({ state });

  return (
    <MapView
      style={styles.mapContainer}
      initialRegion={{
        latitude: 38.5259958,
        longitude: -8.8958961,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    ></MapView>
  );
};
{
  /* <Polyline coordinates={points} /> */
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 450
  }
});
export default Map;
