import React, { useContext } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../utils/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.item, styles.title]}>
        <Text h1>AccountScreen</Text>
      </View>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    marginTop: 40,
    // alignContent: 'center',
    borderWidth: 0,
    borderColor: "#00ff00"
  },
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
