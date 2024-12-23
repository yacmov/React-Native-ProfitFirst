import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
        }}
      >
        <Tabs.Screen
          name="allocations"
          options={{
            title: "Allocations",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="account-tree" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="accounts"
          options={{
            title: "Accounts",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons
                name="account-balance-wallet"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="new-allocation"
          options={{
            title: "New Allocation",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="account-tree" size={size} color={color} />
            ),
            href: null,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
