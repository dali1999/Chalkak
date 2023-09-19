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

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={{ ...styles.logo, color: COLORS.purple }}>찰칵</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <Category />
        <NearPhotographer />
        <RecentPhotographer />
      </ScrollView>
    </SafeAreaView>
  );
}
