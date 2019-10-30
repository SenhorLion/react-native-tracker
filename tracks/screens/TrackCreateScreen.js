import React, { useContext, useCallback } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "../utils/Spacer";
import { Map } from "../components/Map";
import { Container } from "../components/container";
import { ErrorMessage } from "../components/Errors";
import { TrackForm } from "../components/forms";
import screenStyles from "./styles";

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

      <TrackForm></TrackForm>
    </Container>
  );
};

export default withNavigationFocus(TrackCreateScreen);
