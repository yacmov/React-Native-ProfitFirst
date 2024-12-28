import { View, Text } from "react-native";
import React from "react";
import Allocation from "@/model/Allocation";

const AllocationListItem = ({ allocation }: { allocation: Allocation }) => {
  return (
    <View className="rounded-md overflow-hidden">
      <View className="flex-row bg-gray-400 justify-between p-2">
        <Text>{allocation.createdAt.toLocaleDateString("en-au")}</Text>
        <Text className="text-[24px] font-bold text-green-900">
          $ {allocation.income}
        </Text>
      </View>
    </View>
  );
};

export default AllocationListItem;
