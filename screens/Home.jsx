import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import Category from "../components/home/Category";
import NearPhotographer from "../components/home/NearPhotographer";
import RecentPhotographer from "../components/home/RecentPhotographer";
import AppBar from "../components/AppBar/AppBar";

export default function Home() {
  return (
    <SafeAreaView>
      <AppBar title={"찰칵"} color={COLORS.primary} />

      <ScrollView style={{ height: "87%" }}>
        <Category />
        <NearPhotographer />
        <RecentPhotographer />
      </ScrollView>
    </SafeAreaView>
  );
}
