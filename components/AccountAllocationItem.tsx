import { View, Text } from "react-native";
import React from "react";
import AccountAllocation from "@/model/AccountAllocation";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "@/model/Account";

const AccountAllocationItem = ({
  accountAllocation,
  account,
}: {
  accountAllocation: AccountAllocation;
  account: Account;
}) => {
  return (
    <View className="flex-row justify-between">
      <Text>{account.name}</Text>
      <Text>${accountAllocation.amount}</Text>
    </View>
  );
};

const enhance = withObservables(
  ["accountAllocation"],
  ({ accountAllocation }: { accountAllocation: AccountAllocation }) => ({
    accountAllocation,
    account: accountAllocation.account,
  })
);

export default enhance(AccountAllocationItem);
