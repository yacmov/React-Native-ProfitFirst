import { View, Text } from "react-native";
import React from "react";
import Account from "@/model/Account";
import { withObservables } from "@nozbe/watermelondb/react";

type AccountListItem = {
  account: Account;
};

const AccountListItem = ({ account }: AccountListItem) => {
  return (
    <View className="bg-white p-4 flex-row justify-between">
      <Text className="font-bold">{account.name}</Text>
      <Text className="">{account.cap}%</Text>
      <Text className="">{account.tap}%</Text>
    </View>
  );
};

const enhance = withObservables([], ({ account }: AccountListItem) => ({
  account: account,
}));

export default enhance(AccountListItem);
