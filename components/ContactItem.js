import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
const ContactItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.lefContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />

        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={2} style={styles.status}>
            {user.status}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  lefContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "grey",
  },
});
export default ContactItem;
