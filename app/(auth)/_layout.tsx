import { View, Text } from "react-native";
import React from "react";
import { Redirect, Slot } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href={"/"} />;
  }
  return <Slot />;
};

export default AuthLayout;
