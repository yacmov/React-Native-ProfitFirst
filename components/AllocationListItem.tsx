import { View, Text } from "react-native";
import React from "react";
import Allocation from "@/model/Allocation";
import { withObservables } from "@nozbe/watermelondb/react";
import AccountAllocation from "@/model/AccountAllocation";
import AccountAllocationItem from "./AccountAllocationItem";
import { accountAllocationCollection } from "@/db";

type AllocationListItem = {
  allocation: Allocation;
  accountAllocations: AccountAllocation[];
};

const AllocationListItem = ({
  allocation,
  accountAllocations,
}: AllocationListItem) => {
  return (
    <View className="rounded-md overflow-hidden">
      <View className="flex-row bg-gray-400 justify-between p-2">
        <Text className="self-center">
          {allocation.createdAt.toLocaleDateString("en-au")}
        </Text>
        <Text className="text-[24px] font-bold text-green-900">
          $ {allocation.income}
        </Text>
      </View>
      <View key={accountAllocations.length} className="gap-2 py-[5]">
        {accountAllocations.map((item) => (
          <AccountAllocationItem accountAllocation={item} />
        ))}
      </View>
    </View>
  );
};

const enhance = withObservables(
  ["allocation"],
  ({ allocation }: { allocation: Allocation }) => ({
    allocation,
    accountAllocations: allocation.accountAllocations,
  })
);

export default enhance(AllocationListItem);
