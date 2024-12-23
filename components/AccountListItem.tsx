import { View, Text } from "react-native";
import React from "react";

const AccountListItem = () => {
  return (
    <View className="bg-white p-4 flex-row justify-between">
      <Text className="font-bold">Profit</Text>
      <Text className="">10%</Text>
      <Text className="">20%</Text>
    </View>
  );
};

export default AccountListItem;
