import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  return (
    <SafeAreaView className="container">
      <Text>AccountScreen</Text>
      <Link href="/">Go to index</Link>
    </SafeAreaView>
  );
};

export default AccountScreen;
