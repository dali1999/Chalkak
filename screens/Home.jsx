import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./home.style";
import { COLORS, SIZES } from "../constants";
import Category from "../components/home/Category";
import NearPhotographer from "../components/home/NearPhotographer";
import RecentPhotographer from "../components/home/RecentPhotographer";
import AppBar from "../components/AppBar/AppBar";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <AppBar title={"찰칵"} color={COLORS.primary} />

      <ScrollView style={{ height: "87%" }}>
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate("Search")}
        >
          <Ionicons name="search" size={24} color={COLORS.primary} />
          <Text style={styles.searchBarText}>당신의 작가를 찾아보세요</Text>
        </TouchableOpacity>

        <Category />
        <NearPhotographer />
        <RecentPhotographer />
      </ScrollView>
    </SafeAreaView>
  );
}
