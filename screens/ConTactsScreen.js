import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ContactItem from "../components/ContactItem";
import { listUsers } from "../src/graphql/queries";
const ConTactsScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await API.graphql(graphqlOperation(listUsers));
        setUsers(userData.data.listUsers.items);
      } catch (e) {}
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <ContactItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    height: "100%",
  },
});
export default ConTactsScreen;
