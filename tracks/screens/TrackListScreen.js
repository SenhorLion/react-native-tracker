import React, { useContext, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Text, ListItem, Button } from "react-native-elements";
import { NavButton } from "../components/Buttons";
import { Container } from "../components/container";
import { Context as TrackContext } from "../context/TrackContext";
import screenStyles from "./styles";
import Spacer from "../utils/Spacer";

// TODO: TrackListScreen
// 1. Add Delete Track functionality
// 2. Add Favourite / Like track functionality

const TrackListScreen = ({ navigation }) => {
  const { state, getTracks } = useContext(TrackContext);

  const hasTracks = !!state.tracks.length;

  return (
    <Container>
      <NavigationEvents onWillFocus={getTracks}></NavigationEvents>

      {hasTracks ? (
        <FlatList
          data={state.tracks}
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
      ) : (
        <View
          style={{
            flex: 1,

            alignItems: "center",
            justifyContent: "center",
            borderColor: "magenta",
            borderWidth: 0
          }}
        >
          <Text h4>No Tracks listed, why not create some?</Text>
          <Spacer>
            <Button
              title="Create Track"
              onPress={() => navigation.navigate("TrackCreate")}
            />
          </Spacer>
        </View>
      )}
    </Container>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks"
  };
};

export default TrackListScreen;
