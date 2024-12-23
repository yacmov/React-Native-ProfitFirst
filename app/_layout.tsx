import { Stack, Tabs } from "expo-router";
import "../global.css";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
