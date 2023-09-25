import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar/AppBar";

export default function Galary() {
  return (
    <SafeAreaView>
      <AppBar title={"갤러리"} color={COLORS.gray} />
      <Text>갤러리</Text>
    </SafeAreaView>
  );
}
