import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { Container } from "../components/container";
import { Context as TrackContext } from "../context/TrackContext";
import screenStyles from "./styles";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  // TODO: TrackDetail: Show start & end location pointer
  return (
    <Container>
      <View style={[screenStyles.item, screenStyles.title]}>
        <Text h1>{track.name}</Text>
      </View>

      <MapView
        style={styles.mapContainer}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
        ></Polyline>
      </MapView>
    </Container>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 450
  }
});

export default TrackDetailScreen;
