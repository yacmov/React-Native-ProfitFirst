import { View, Text, FlatList } from "react-native";
import React from "react";
import AllocationListItem from "./AllocationListItem";
import { withObservables } from "@nozbe/watermelondb/react";
import { allocationsCollection } from "@/db";
import Allocation from "@/model/Allocation";
import { Q } from "@nozbe/watermelondb";

const AllocationsList = ({ allocations }: { allocations: Allocation[] }) => {
  return (
    <FlatList
      data={allocations}
      contentContainerClassName="gap-2 p-2"
      renderItem={({ item }) => <AllocationListItem allocation={item} />}
    />
  );
};

const enhance = withObservables([], () => ({
  allocations: allocationsCollection.query(Q.sortBy("created_at", Q.desc)),
}));

export default enhance(AllocationsList);
