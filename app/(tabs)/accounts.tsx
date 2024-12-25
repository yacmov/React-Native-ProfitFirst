import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountsList from "@/components/AccountsList";
import database, { accountsCollection } from "@/db";
import Account from "@/model/Account";

const AccountScreen = () => {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");
  const get = () => [name, cap, tap];
  const sets = () => [setName, setCap, setTap];

  const createAccount = async () => {
    console.warn("Create account: ", name, cap, tap);
    await database.write(async () => {
      await accountsCollection.create((account) => {
        account.name = name;
        account.cap = Number.parseFloat(cap);
        account.tap = Number.parseFloat(tap);
      });
    });
    sets().forEach((set) => {
      set("");
    });
  };

  const onRead = async () => {
    const accounts = await accountsCollection.query().fetch();
    console.warn(accounts);
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
      <Button title="Test" onPress={onRead} />
    </SafeAreaView>
  );
};

export default AccountScreen;
