import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessageItem from "../components/ChatMessageItem";
import Chats from "../assets/data/Chats";
import InputBox from "../components/InputBox";

function ChatScreen({ navigation }) {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <FlatList
        data={Chats.messages}
        renderItem={({ item }) => <ChatMessageItem message={item} />}
      />
      <InputBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    height: "100%",
  },
});
export default ChatScreen;
