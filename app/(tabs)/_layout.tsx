import React from "react";
import { Redirect, Stack } from "expo-router";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAuth } from "@/providers/AuthProvider";

const TabsLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href={"/login"} />;
  }

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
