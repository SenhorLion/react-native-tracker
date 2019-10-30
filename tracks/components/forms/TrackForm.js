import React, { useContext } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Spacer from "../../utils/Spacer";
import { Context as LocationContext } from "../../context/LocationContext";
import useSaveTrack from "../../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  console.log("@@@locations", locations.length);

  const trackerButton = recording ? (
    <Button
      title="Stop Tracking"
      buttonStyle={{ backgroundColor: "#ee1111" }}
      onPress={stopRecording}
    ></Button>
  ) : (
    <Button title="Start Tracking" raised onPress={startRecording}></Button>
  );

  const saveTrackButton =
    !recording && locations.length ? (
      <Spacer>
        <Button
          title="Save Track"
          buttonStyle={{ backgroundColor: "green" }}
          onPress={saveTrack}
        ></Button>
      </Spacer>
    ) : null;

  return (
    <View>
      <Spacer>
        <Text>Title</Text>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter track name"
        ></Input>
      </Spacer>
      <Spacer>{trackerButton}</Spacer>
      {saveTrackButton}
    </View>
  );
};

export default TrackForm;
