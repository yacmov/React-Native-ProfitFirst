import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import database, { accountsCollection, allocationsCollection } from "@/db";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "@/model/Account";

const NewAllocationScreen = ({ accounts }: { accounts: Account[] }) => {
  const router = useRouter();
  const [income, setIncome] = useState("0");

  const save = async () => {
    await database.write(async () => {
      allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income);
      });
    });
    setIncome("");
    router.replace("/(tabs)/allocations");
  };

  return (
    <SafeAreaView className="p-2 gap-[10]">
      <View className="flex-row items-center gap-2">
        <Text className="w-[100]">Income</Text>
        <TextInput
          value={income}
          onChangeText={setIncome}
          className="bg-white p-2 rounded-md flex-1"
          placeholder="123"
        />
      </View>
      {accounts.map((account) => (
        <View key={account.id} className="flex-row items-center">
          <Text className="flex-1">
            {account.name}: {account.cap}
          </Text>
          <Text>$ {(Number.parseFloat(income) * account.cap) / 100}</Text>
        </View>
      ))}

      <Button onPress={save} title="Save" />
    </SafeAreaView>
  );
};

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));

export default enhance(NewAllocationScreen);
