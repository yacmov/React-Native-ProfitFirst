import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View className="container">
      <SafeAreaView>
        <Text>Allocations</Text>
        <Link href={"/(tabs)/new-allocation"}>Go to accounts</Link>
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
