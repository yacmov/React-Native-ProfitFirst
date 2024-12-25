import { View, Text } from "react-native";
import React from "react";
import Account from "@/model/Account";

const AccountListItem = ({ account }: { account: Account }) => {
  return (
    <View className="bg-white p-4 flex-row justify-between">
      <Text className="font-bold">{account.name}</Text>
      <Text className="">{account.cap}</Text>
      <Text className="">{account.tap}</Text>
    </View>
  );
};

export default AccountListItem;
