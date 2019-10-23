import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../utils/Spacer";
import { Container } from "../components/container";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <Container>
      <View style={[styles.item, styles.title]}>
        <Text h1>AccountScreen</Text>
      </View>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    padding: 10,
    borderColor: "#f0f",
    borderWidth: 0
  },
  title: {
    alignSelf: "center",
    justifyContent: "center"
  }
});

export default AccountScreen;
