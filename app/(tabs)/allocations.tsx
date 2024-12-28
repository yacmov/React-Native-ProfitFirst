import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AllocationsList from "@/components/AllocationsList";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <SafeAreaView>
        <Link href={"/(tabs)/new-allocation"} asChild>
          <Text className="bg-green-800 text-white m-2 p-2 text-center font-bold rounded-lg overflow-hidden">
            Go new allocation
          </Text>
        </Link>
        <AllocationsList />
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
