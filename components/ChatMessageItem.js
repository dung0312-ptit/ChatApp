import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const ChatMessageItem = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage() && (
          <Text style={styles.userName}>{message.user.name}</Text>
        )}
        <Text style={styles.messageContent}>{message.content}</Text>
        <Text style={styles.createdAt}>
          {moment(message.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  messageContent: {},
  createdAt: {
    alignSelf: "flex-end",
    color: "grey",
  },
});
export default ChatMessageItem;
