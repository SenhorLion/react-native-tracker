import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 0,

    borderWidth: 0,
    borderColor: "#0000ff"
  }
});

export default Container;
