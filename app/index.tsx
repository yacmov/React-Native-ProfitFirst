import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
const App = () => {
  return (
    <SafeAreaView className="container">
      <Redirect href={"/(tabs)/allocations"} />
    </SafeAreaView>
  );
};

export default App;
