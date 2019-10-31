import React, { useContext, useCallback } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "../utils/Spacer";
import { Map } from "../components/Map";
import { Container } from "../components/container";
import { ErrorMessage } from "../components/Errors";
import { TrackForm } from "../components/forms";
import screenStyles from "./styles";

// TODO: TrackCreateScreen
// 1. Add Start and endpoint markers on Map tracks

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(location => addLocation(location, recording), [
    recording
  ]);
  const [errorMessage] = useLocation(isFocused || recording, callback);

  return (
    <Container>
      <View style={[screenStyles.item, screenStyles.title]}>
        <Text h1>Add Track</Text>
      </View>
      <Map></Map>
      {errorMessage ? (
        <Spacer>
          <ErrorMessage
            message={`Please enable location services. ${errorMessage}`}
          ></ErrorMessage>
        </Spacer>
      ) : null}

      <TrackForm></TrackForm>
    </Container>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title: "Add Track",
    tabBarIcon: <FontAwesome name="plus" size={20}></FontAwesome>
  };
};

export default withNavigationFocus(TrackCreateScreen);
