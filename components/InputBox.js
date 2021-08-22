import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicroPress = () => {
    console.warn("mic");
  };

  const onSendPress = () => {
    console.warn("send");
  };

  const onPress = () => {
    if (!message) {
      onMicroPress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.lefWrapper}>
        <MaterialCommunityIcons
          name={"sticker-emoji"}
          size={25}
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder={"type here"}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        {!message && (
          <Feather name={"paperclip"} size={25} style={styles.icon} />
        )}
        {!message && <Feather name={"camera"} size={25} style={styles.icon} />}
      </View>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={styles.rightWrapper}>
          {!message ? (
            <Feather name={"mic"} size={25} />
          ) : (
            <Feather name={"send"} size={25} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  lefWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginRight: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  rightWrapper: {
    backgroundColor: "grey",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default InputBox;
