import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);
import { withAuthenticator } from "aws-amplify-react-native";

const App = () => {
  return <StackNavigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default withAuthenticator(App);
