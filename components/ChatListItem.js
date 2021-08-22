import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = ({ ChatRoom }) => {
  const navigation = useNavigation();
  const user = ChatRoom.users[1];
  const onClick = () => {
    navigation.navigate("chatScreen", { id: ChatRoom.id, name: user.name });
  };
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <View style={styles.Wrapper}>
        <Avatar.Image
          size={50}
          source={{ uri: user.imageUri }}
          style={styles.Avatar}
        />
        <View style={styles.rightWrapper}>
          <View style={styles.nameWrapper}>
            <Text style={styles.nameTitle}>{user.name}</Text>
            <Text style={styles.dateTitle}>
              {moment(ChatRoom.lastMessage.createdAt).format("YYYY/MM/DD")}
            </Text>
          </View>

          <Text style={styles.lastMessage}>{ChatRoom.lastMessage.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  Avatar: {},
  rightWrapper: {
    flexDirection: "column",
    marginLeft: 20,
    width: "80%",
    justifyContent: "space-between",
  },
  nameWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
  },
  nameTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  dateTitle: {
    fontSize: 16,
    color: "grey",
  },
});
