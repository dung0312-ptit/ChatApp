import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTabsNavigation from "./TopTabsNavigation";
import ChatScreen from "../screens/ChatScreen";
import { View, Text, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

Feather.loadFont();

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={TopTabsNavigation}
          options={() => ({
            title: "WhatsApp",
            headerRight: () => (
              <View style={styles.HomeScreenHeaderRight}>
                <Feather name={"search"} size={20} />
                <Feather name={"more-vertical"} size={20} />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="chatScreen"
          component={ChatScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: () => (
              <View style={styles.chatScreenHeaderRight}>
                <Feather name={"video"} size={20} />
                <Feather name={"phone-call"} size={20} />
                <Feather name={"more-vertical"} size={20} />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  chatScreenHeaderRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    width: 100,
  },
  HomeScreenHeaderRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    width: 60,
    height: 70,
    alignItems: "center",
  },
});
export default StackNavigation;
