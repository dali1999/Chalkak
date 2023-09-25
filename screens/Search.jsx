import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar/AppBar";

export default function Search() {
  return (
    <SafeAreaView>
      <AppBar title={"찰영 신청"} color={COLORS.gray} />

      <Text>Search</Text>
    </SafeAreaView>
  );
}
