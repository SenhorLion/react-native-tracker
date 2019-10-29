import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../utils/Spacer";
import { Container } from "../components/container";
import screenStyles from "./styles";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <Container>
      <View style={[screenStyles.item, screenStyles.title]}>
        <Text h1>AccountScreen</Text>
      </View>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </Container>
  );
};

export default AccountScreen;
