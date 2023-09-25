import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import AppBar from "../components/AppBar/AppBar";

export default function Profile() {
  return (
    <SafeAreaView>
      <AppBar title={"마이 페이지"} color={COLORS.gray} />
      <Text>Profile</Text>
    </SafeAreaView>
  );
}
