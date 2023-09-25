import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar/AppBar";
export default function Community() {
  return (
    <SafeAreaView>
      <AppBar title={"커뮤니티"} color={COLORS.gray} />
      <Text>커뮤니티</Text>
    </SafeAreaView>
  );
}
