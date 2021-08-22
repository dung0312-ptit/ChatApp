import React from "react";
import { StyleSheet, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
const AddNewMessageButton = () => {
  return (
    <View style={styles.container}>
      <Feather name={"message-square"} size={25} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCF8C5",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    right: 50,
    borderRadius: 50,
  },
});
export default AddNewMessageButton;
