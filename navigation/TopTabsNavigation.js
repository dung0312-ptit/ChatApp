import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatListScreen from "../screens/ChatListScreen";
import CallsScreen from "../screens/CallsScreen";
import StatusScreen from "../screens/StatusScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="chatlist" component={ChatListScreen} />
      <Tab.Screen name="call" component={CallsScreen} />
      <Tab.Screen name="status" component={StatusScreen} />
    </Tab.Navigator>
  );
};

export default TopTabsNavigation;
