import React from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import ChatListItem from "../components/ChatListItem";
import ChatRooms from "../assets/data/ChatRooms";
import AddNewMessageButton from "../components/AddNewMessageButton";

function ChatListScreen({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem ChatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <AddNewMessageButton />
    </View>
  );
}

export default ChatListScreen;
