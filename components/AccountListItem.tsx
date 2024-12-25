import { View, Text } from "react-native";
import React from "react";
import Account from "@/model/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import AntDesign from "@expo/vector-icons/AntDesign";
import database from "@/db";

type AccountListItem = {
  account: Account;
};

const AccountListItem = ({ account }: AccountListItem) => {
  const onDelete = async () => {
    await database.write(async () => {
      await account.markAsDeleted();
    });
  };

  return (
    <View className="bg-white p-4 flex-row justify-between">
      <Text className="flex-1 font-bold">{account.name}</Text>
      <Text className="flex-1">{account.cap}%</Text>
      <Text className="flex-1">{account.tap}%</Text>
      <AntDesign name="delete" size={18} color="gray" onPress={onDelete} />
    </View>
  );
};

const enhance = withObservables([], ({ account }: AccountListItem) => ({
  account: account,
}));

export default enhance(AccountListItem);
