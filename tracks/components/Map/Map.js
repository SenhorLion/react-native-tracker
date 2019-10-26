import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 38.5259958 + i * 0.001,
        longitude: -8.8958961 + i * 0.001
      });
    } else {
      points.push({
        latitude: 38.5259958 + i * 0.002,
        longitude: -8.8958961 + i * 0.01
      });
    }
  }
  return (
    <MapView
      style={styles.mapContainer}
      initialRegion={{
        latitude: 38.5259958,
        longitude: -8.8958961,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 450
  }
});
export default Map;
