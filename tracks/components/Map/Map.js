import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);

  console.log({ currentLocation });

  if (!currentLocation) {
    return (
      <ActivityIndicator
        size="large"
        style={{ marginTop: 200 }}
      ></ActivityIndicator>
    );
  }

  return (
    <MapView
      style={styles.mapContainer}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={60}
        strokeColor="rgba(255,0,255, 1.0)"
        fillColor="rgba(255,158,255, 0.5)"
      ></Circle>
    </MapView>
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
