import { View, Text, ScrollView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AllocationsList from "@/components/AllocationsList";
import Feather from "@expo/vector-icons/Feather";
import mySync from "@/db/sync";
import { supabase } from "@/lib/supabase";
import * as Crypto from "expo-crypto";

const test = async () => {
  const res = await supabase.rpc("create_account", {
    _id: Crypto.randomUUID(),
    _user_id: Crypto.randomUUID(),
    _name: "Example Name",
    _cap: 1000.0,
    _tap: 500.0,
    _created_at: new Date().toISOString(),
    _updated_at: new Date().toISOString(),
  });
  console.log(res);
};
const HomeScreen = () => {
  return (
    <View className="flex-1">
      <SafeAreaView>
        <View className="flex-row">
          <Link href={"/(tabs)/new-allocation"} asChild>
            <Text className="bg-green-800 flex-1 self-center text-white m-2 p-2 text-center font-bold rounded-lg overflow-hidden">
              Go new allocation
            </Text>
          </Link>
          <Feather
            className="p-4"
            name="refresh-cw"
            size={24}
            color="green"
            onPress={mySync}
          />
        </View>
        <View className="border-2 m-2 rounded-lg bg-gray-300 border-gray-300">
          <Button title="Test" onPress={test} />
        </View>
        <AllocationsList />
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
