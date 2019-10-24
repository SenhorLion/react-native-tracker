import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return <MapView style={styles.mapContainer}></MapView>;
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 300
  }
});
export default Map;
