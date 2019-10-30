import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../utils/Spacer";
import { Container } from "../components/container";
import screenStyles from "./styles";

const AccountScreen = ({ navigation }) => {
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

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={20}></FontAwesome>
    // header: null
  };
};

export default AccountScreen;
