import { View, Text, FlatList } from "react-native";
import React from "react";
import AccountListItem from "./AccountListItem";
import { accountsCollection } from "@/db";
import Account from "@/model/Account";
import { withObservables } from "@nozbe/watermelondb/react";

const AccountsList = ({ accounts }: { accounts: Account[] }) => {
  return (
    <FlatList
      contentContainerClassName="gap-2"
      data={accounts}
      renderItem={({ item }) => <AccountListItem account={item} />}
    />
  );
};

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));

export default enhance(AccountsList);
