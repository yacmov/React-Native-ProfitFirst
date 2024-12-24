import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountsList from "@/components/AccountsList";

const AccountScreen = () => {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const createAccount = () => {
    console.warn("Create account: ", name, cap, tap);
  };

  return (
    <SafeAreaView className="gap-2 px-4">
      <View className="flex-row justify-between px-4">
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>TAP</Text>
      </View>

      <AccountsList />
      <View className="flex-row justify-between px-4">
        <TextInput value={name} onChangeText={setName} placeholder="Name" />
        <TextInput value={cap} onChangeText={setCap} placeholder="CAP %" />
        <TextInput value={tap} onChangeText={setTap} placeholder="TAP %" />
      </View>
      <Button title="Add account" onPress={createAccount} />
    </SafeAreaView>
  );
};

export default AccountScreen;
