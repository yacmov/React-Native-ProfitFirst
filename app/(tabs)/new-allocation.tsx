import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import database, { allocationsCollection } from "@/db";

const NewAllocationScreen = () => {
  const [income, setIncome] = useState("");

  const save = async () => {
    await database.write(async () => {
      allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income);
      });
    });
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
      <Button onPress={save} title="Save" />
    </SafeAreaView>
  );
};

export default NewAllocationScreen;
