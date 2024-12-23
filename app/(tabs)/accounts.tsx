import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountsList from "@/components/AccountsList";

const AccountScreen = () => {
  return (
    <SafeAreaView className="gap-2 px-4">
      <View className="flex-row justify-between px-4">
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>TAP</Text>
      </View>

      <AccountsList />
    </SafeAreaView>
  );
};

export default AccountScreen;
