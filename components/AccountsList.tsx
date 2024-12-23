import { View, Text, FlatList } from "react-native";
import React from "react";
import AccountListItem from "./AccountListItem";

const AccountsList = () => {
  return (
    <FlatList
      contentContainerClassName="gap-2"
      data={[1, 2, 3]}
      renderItem={() => <AccountListItem />}
    />
  );
};
export default AccountsList;
