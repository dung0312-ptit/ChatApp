import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const AddNewMessageButton = () => {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("contactsScreen");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Feather name={"message-square"} size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCF8C5",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    right: 50,
    borderRadius: 50,
  },
});
export default AddNewMessageButton;
